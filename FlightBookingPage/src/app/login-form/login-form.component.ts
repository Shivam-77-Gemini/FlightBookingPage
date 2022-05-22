import { Component, OnInit } from '@angular/core';
import { Form, FormsModule } from '@angular/forms';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  detail:any=[];
  @ViewChild('signInForm') SignInForm!:
  any;


  constructor() { 
    // this.detail=this.SignInForm.value();
  }
  // onSubmit(){
  //   if(this.SignInForm.email==="Admin@12" && this.SignInForm.password==="Admin@12"){
    
  //     return true;

  //   }
  //   else{
  //     alert("You have entered something wrong \n please Enter correct details!");
  //     return false;
  //   }
  // }
  

  ngOnInit(): void {
  }

}
