import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { CreateEmployeeComponent } from "../../employeemodule/create-employee/create-employee.component";
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
	constructor(private dataService: DataService,private router : Router) {}

	isAdmin: boolean = false;
	isEmployee: boolean = false;
	isUser: boolean = false;
	isWrongUser = false;
	message:string = ""

	ngOnInit(): void {}
	loginFromGroup = new FormGroup({
		email: new FormControl('',[Validators.required,Validators.email]),
		pwd: new FormControl(''),
		token: new FormControl(this.createToken())
	});

	onLogin(loginFromGroup) {
		// console.log(typeof(loginFromGroup.value))
		this.dataService.userLogin(loginFromGroup.value).subscribe(res => {
			console.log(res);
			this.localTokenSave(res.token);
			console.log(window.localStorage.getItem('token'));
			switch (res.role_id) {
				case 1:
					this.isAdmin = true;
					window.localStorage.setItem('user','1')
					this.router.navigate(['/createEmployeeComponent'])
					console.log('Admin login ...');
					break;
				case 2:
					this.isEmployee = true;
					console.log('Employee is loged in ');
					this.router.navigate(['/createEmployeeComponent'])
					break;
				case 3:
					this.isUser = true;
					window.localStorage.setItem('user',"3");
					console.log('user is loged in ...');
					break;

				default:
					this.isWrongUser = true
					this.message = res.message
					break;
			}
		});
	}

	// ######## CREATE TOKEN #########//
	createToken(length: number = 15) {
		var result = '';
		var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		var charactersLength = characters.length;
		for (var i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}
	//########### SAVE TOKEN IN SERVER ###############
	localTokenSave(token: string) {
		window.localStorage.setItem('token', token);
	}


	//################## REMOVE ERROR ON FOCUS ############### 
	removeError(){
		console.log('remove error call ....')
		this.message = ""
	}
}
