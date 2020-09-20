import { Component, OnInit, Input, Inject } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { switchMap } from 'rxjs/operators';
import {visibility } from '../animations/app.animation';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css'],
  animations : [
      visibility()
  ]
})
export class DishdetailComponent implements OnInit {

  // @Input() // for input  informaton from html
  dish: Dish;
  errMsg: string;
  dishIds: string[];
  prev: string;
  next: string;
  dishCopy: Dish;
  visibility = 'shown'

  constructor(private dishService: DishService,
    private location: Location,
    private route: ActivatedRoute,
    @Inject('baseUrl') private baseUrl
  ) { }

  ngOnInit(): void {
    console.log(this.route)
    this.dishService.getDishIds()
      .subscribe((dishIds) => {
        this.dishIds = dishIds
      })
    this.route.params
      .pipe(switchMap((params: Params) => {
                                     this.visibility='hidden';
                                     return this.dishService.getDish(params.id)
                                    }
                                 )  
                            )
      .subscribe((dish) => {
        this.dish = dish;
        this.dishCopy = dish;
        this.setPrevNext(dish.id);
        this.visibility='shown'
      },
        (errmsg) => {
          this.errMsg = <any>errmsg
        }
      )

  }


  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length]
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length]
  }

  goBack(): void {
    this.location.back()
  }


}
