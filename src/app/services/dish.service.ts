import { Injectable } from '@angular/core';
import {Dish} from '../shared/dish';
import {DISHES} from '../shared/dishes'

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
   
  getDishes(): Dish[]{
    return DISHES
  }

  getDish(id:string) : Dish{
       let amin = DISHES.filter(item => item.id == id)[0]
       console.log(amin)
       return amin
  }
  
  getFeaturedDish(): Dish {
    return DISHES.filter(item => item.featured )[0]
  }

}
