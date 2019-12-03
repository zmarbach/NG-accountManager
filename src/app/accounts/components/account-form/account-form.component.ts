import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Account } from '../../../models';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'am-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {

  //define account as an input so can now pass it IN FROM parent component (account-editor)
  @Input() myAccount: Account;

  //define event as output so can pass it OUT TO the parent component
  @Output() myEvent = new EventEmitter<number>();

  private timesClicked = 0;

  private accountForm: FormGroup;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log(this.myAccount);

    //pass in an object with keys that are the names for each of the inputs on your form...called "controls"
    this.accountForm = this.formBuilder.group({
      //initial value of form input will be the first value, then add any validators you want (need .ng-valid class in CSS)
      name:[ this.myAccount.name, Validators.required ],
      email: [ this.myAccount.email, Validators.compose([Validators.email, Validators.required]) ]
    })
  }

  buttonClicked(){
    this.timesClicked++;

    this.myEvent.emit(this.timesClicked);
  }

  reset(){
    this.accountForm.patchValue({
      name: '',
      email: ''
    });
  }

  cancel(){
    this.accountForm.patchValue({
      name: this.myAccount.name,
      email: this.myAccount.email
    });
  }

  submitForm(){
    window.alert("Form submitted");
    console.log("form submitted", this.accountForm.value);
  }

  save(){
    //just set values in actual account object ass the values types into the accountForm
    const value = this.accountForm.value;
    this.myAccount.name = value.name;
    this.myAccount.email = value.email;
  }

}
