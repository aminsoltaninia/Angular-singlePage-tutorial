import { Component, OnInit } from '@angular/core';
import {Promotion} from '../shared/promotion';
import {Dish} from '../shared/dish';
import {Corporate} from '../shared/corporate';

import {DishService} from '../services/dish.service';
import {PromotionService } from '../services/promotion.service';
import {CorporateLeaderService} from '../services/corporate-leader.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  corporate : Corporate ;
  dish : Dish ;
  dishesh : Dish[];
  promotion : Promotion;
  constructor(private dishService : DishService , 
              private promotionService : PromotionService,
              private corporationLeaderService : CorporateLeaderService
              ) { }

  ngOnInit(): void {
     this.dishService.getFeaturedDish()
                     .subscribe((dish)=>{
                       this.dish = dish;
                     })
                     
    this.promotionService.getFeaturedPromition()
                         .subscribe((featurPromotion)=>{ this.promotion= featurPromotion})
                         
     this.corporationLeaderService.getFeaturedCorporate()
                                  .subscribe((featurCorporate)=>{
                                    this.corporate=featurCorporate
                                  })
                                  
  }

}
