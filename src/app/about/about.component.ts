import { Component, OnInit } from '@angular/core';
import {Corporate} from '../shared/corporate';
import {CorporateLeaderService} from '../services/corporate-leader.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  corporate : Corporate ;
  CORPORATES : Corporate[] ;
  constructor(private Corporate : CorporateLeaderService ) { }

  ngOnInit(): void {
     this.Corporate.getCorporates()
                   .subscribe((corporates)=>{
                       this.CORPORATES = corporates
                   })
                 
  }

}
