import { Component, OnInit } from '@angular/core';
import {FormBuilder , FormGroup , Validators} from '@angular/forms';
import {Feedback , ContactType} from '../shared/feedback'

@Component({
  selector: 'app-contant',
  templateUrl: './contant.component.html',
  styleUrls: ['./contant.component.scss']
})
export class ContantComponent implements OnInit {

  feedbackFrom : FormGroup ;
  feedback : Feedback ;
  contactType = ContactType ;
  constructor(private formBuilder : FormBuilder) { 
     
     this.cerateForm();

  }

  ngOnInit(): void {
  }

  cerateForm(){
      this.feedbackFrom = this.formBuilder.group({
        firstname : '' , 
        lastname :'',
        telnumber : 0,
        email : '' ,
        agree : false ,
        contacttype : 'None',
        message : '' ,
      })
  }

  onSubmit(){
     this.feedback = this.feedbackFrom.value;
     console.log(this.feedback);
     this.feedbackFrom.reset()
  }
}
