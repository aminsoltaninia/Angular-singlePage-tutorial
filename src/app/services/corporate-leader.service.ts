import { Injectable } from '@angular/core';
import { Corporate} from '../shared/corporate';
import {CORPORATES} from '../shared/corporates';


@Injectable({
  providedIn: 'root'
})
export class CorporateLeaderService {

  constructor() { }
  

  getCorporates() : Corporate[]{
      return CORPORATES ;
  }
  
  getFeaturedCorporate() : Corporate {
    return CORPORATES.filter(item => item.featured )[0]
  }
}
