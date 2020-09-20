import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';

import {Observable, of } from 'rxjs';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { baseUrl } from '../shared/baseUrl';
import { map , catchError } from 'rxjs/operators';
import { ProcessHttpMsgService} from './process-http-msg.service'

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http : HttpClient , 
              private processHttpMsgService : ProcessHttpMsgService ) { }

  getDishes(): Observable<Dish[]> {
    // use RXJS
    
    return this.http.get<Dish[]>(baseUrl+'dishes')
             .pipe(catchError(this.processHttpMsgService.handleError))
  }

  getDish(id: string): Observable<Dish> {
    console.log("hiii")
    return this.http.get<Dish>(baseUrl+'dishes/'+id)
                    .pipe(catchError(this.processHttpMsgService.handleError))
    
  }

  getFeaturedDish(): Observable<Dish> {
    return this.http.get<Dish[]>(baseUrl+'dishes?featured=true')   
                     .pipe(map(dishes => dishes[0]))   
                     .pipe(catchError(this.processHttpMsgService.handleError))           
    
  }
  
  getDishIds(): Observable<string[] | any >{

    return this.getDishes()
               .pipe(map(dishes=> dishes.map(dish => dish.id)))
               .pipe(catchError(error => error ))

  }

  putDish(dish : Dish) : Observable<Dish> {
     const httOptions  = {
        headers : new HttpHeaders ({
           'Content-Type' : 'application/json'
        })
     };
    
     return this.http.put<Dish>(baseUrl+'dishes/'+dish.id , dish ,httOptions )
                      .pipe(catchError(this.processHttpMsgService.handleError))  

  }

}
