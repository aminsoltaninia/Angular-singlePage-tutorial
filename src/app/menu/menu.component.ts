import { Component, OnInit, Inject } from '@angular/core';


import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dishes: Dish[];
  errMsg : string ;

  constructor(private dishService: DishService,
               @Inject('baseUrl') private baseUrl) { }

  ngOnInit(): void {
    this.dishService.getDishes()
      .subscribe(
         (dishes) => {
            this.dishes = dishes;
         } ,
         (errmsg) => {
            this.errMsg = <any> errmsg
          
          } 
          
          )

  }

}
