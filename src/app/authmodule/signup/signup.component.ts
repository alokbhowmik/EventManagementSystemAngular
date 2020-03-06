import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, NgForm, Validators } from "@angular/forms";
import { DataService } from "src/app/services/data.service";
import { SingupModel } from "./singup-model.model";
import {
  nameValidation,
  mobValidation,
  passwordValidation
} from "src/app/gte.validator";
import { Router } from '@angular/router';

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  data: any;
  signup = new SingupModel();
  message:string = "" 
  isValidEmail:boolean = false;
  signupFromGroup:FormGroup;

  constructor(private dataService: DataService, private router:Router) {}

  ngOnInit(): void {
    this.signupFromGroup = new FormGroup({
      firstname: new FormControl("", [Validators.required, nameValidation]),
      lastname: new FormControl("", [Validators.required, nameValidation]),
      email: new FormControl("", [Validators.required, Validators.email]),
      mob: new FormControl("", [Validators.required, mobValidation]),
      pwd: new FormControl("", [
        Validators.required,
        passwordValidation
      ]),
      roleid: new FormControl("3")
    });
  }
  

  onSignup(signupFromGroup:FormGroup) {
    // console.log("singup function call ...");
    // console.log(signupFromGroup.value)
    this.signup.firstname = signupFromGroup.value["firstname"];
    this.signup.lastname = signupFromGroup.value["lastname"];
    this.signup.email = signupFromGroup.value["email"];
    this.signup.mob = signupFromGroup.value["mob"];
    this.signup.password = signupFromGroup.value["pwd"];
    this.signup.roleid = signupFromGroup.value['roleid']
    
    this.dataService.insertUserData(this.signup).subscribe(res => {
      console.log(res);
      switch (res['id']) {  
        case 0:
          this.message = res['message'];
          this.isValidEmail = true;
          break;
      
        default:
          this.router.navigate(['/user/login'])
          break;
      }
    });
  }
}
