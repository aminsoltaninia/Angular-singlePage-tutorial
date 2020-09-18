import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit , ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback'

@Component({
  selector: 'app-contant',
  templateUrl: './contant.component.html',
  styleUrls: ['./contant.component.scss']
})
export class ContantComponent implements OnInit {

  feedbackFrom: FormGroup;
  feedback: Feedback;
  contactType = ContactType;
  
  formErrors = {
    'firstname': '',
    'lastname' : '',
    'telnumber': '',
    'email' : ''
  } 

  validationMessages = {
    'firstname': {
      'required' : 'Firsname is required',
      'minlength' : 'first name must be at 2 caracture',
      'maxlength' : 'first name must be less than  20 caracture'
    },
    'lastname': {
      'required' : 'lastname is required',
      'minlength' : 'last name must be at 2 caracture',
      'maxlength' : 'last name must be less than  20 caracture'
    },
    'telnumber' : {
      'required' : 'tel number required',
      'pattern' : 'tel number must contain number only'
    },
    'email' : {
      'required' : 'email  required',
      'pattern' : 'email must be an email'
    }
  };

  @ViewChild('fform') feedbackFormDirective ;

  constructor(private formBuilder: FormBuilder) {

    this.cerateForm();

  }

  ngOnInit(): void {
  }

  cerateForm() {
    this.feedbackFrom = this.formBuilder.group({
      firstname: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
      lastname: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
      telnumber: [0, [Validators.required, Validators.pattern]],
      email: ['', [Validators.required, Validators.email]],
      agree: false,
      contacttype: 'None',
      message: '',
    })
    
     this.feedbackFrom.valueChanges

                      .subscribe(data=>{
                          this.onValueChanged(data)
                      })
    this.onValueChanged();//re(set) gorm validation messages
  }

  onValueChanged(data?:any) {
      if(!this.feedbackFrom) return;
      const form = this.feedbackFrom ;
      for(const field in this.formErrors){
          if(this.formErrors.hasOwnProperty(field)){
             // clear previous ero message 
             this.formErrors[field] = '';
             const control = form.get(field);
             if(control && control.dirty && !control.valid){
               const messages = this.validationMessages[field]
               for(const key in control.errors){
                 if(control.errors.hasOwnProperty(key)){
                   this.formErrors[field] += messages[key] +  ' ';
                 }
               }
             }
          }
      }
  }

  onSubmit() {
    this.feedback = this.feedbackFrom.value;
    console.log(this.feedback);
    this.feedbackFrom.reset({
      firstname: '',
      lastname: '',
      telnumber:0,
      email: '',
      agree: false,
      contacttype: 'None',
      message: '',
    });
    this.feedbackFormDirective.resetForm();
  }
}
