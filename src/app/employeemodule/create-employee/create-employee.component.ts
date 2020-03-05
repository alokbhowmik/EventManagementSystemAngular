import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { nameValidation, mobValidation, passwordValidation } from 'src/app/gte.validator';
import { SingupModel } from 'src/app/authmodule/signup/singup-model.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  signup = new SingupModel();

  constructor(private dataService: DataService,private router: Router) {}

  ngOnInit(): void {
    // this.data = this.dataService.getData().subscribe(res=>{
    //   console.log(res)
    // })
  }
  signupFromGroup = new FormGroup({
    firstname: new FormControl("", [Validators.required, nameValidation]),
    lastname: new FormControl("", [Validators.required, nameValidation]),
    email: new FormControl("", [Validators.required, Validators.email]),
    mob: new FormControl("", [Validators.required, mobValidation]),
    pwd: new FormControl("", [
      Validators.required,
      passwordValidation
    ]),
    roleid: new FormControl("2")
  });

  onCreateEmployee(signupFromGroup) {
    console.log("singup function call ...");
    // console.log(signupFromGroup.value)
    this.signup.firstname = signupFromGroup.value["firstname"];
    this.signup.lastname = signupFromGroup.value["lastname"];
    this.signup.email = signupFromGroup.value["email"];
    this.signup.mob = signupFromGroup.value["mob"];
    this.signup.password = signupFromGroup.value["pwd"];
    this.signup.roleid = signupFromGroup.value["roleid"]
    this.dataService.insertUserData(this.signup).subscribe(res => {
      console.log(res);
      this.router.navigate(['/createEmployeeComponent'])
    });
  }

}
