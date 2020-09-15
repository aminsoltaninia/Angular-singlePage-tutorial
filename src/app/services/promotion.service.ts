import { Injectable } from '@angular/core';

import {Promotion} from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';


@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Promotion[]{
    return PROMOTIONS
  }

  getPromotion(id:string) : Promotion{
  
       return PROMOTIONS.filter(item => item.id == id)[0]
  }
  
  getFeaturedPromition(): Promotion {
    return PROMOTIONS.filter(item => item.featured )[0]
  }
}
