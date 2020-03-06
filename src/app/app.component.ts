import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eventManagementAngular';
  userName: string = ""
  logedin:boolean= false
  logedout:boolean = true

  constructor(private router:Router){
    // console.log('constructor calling ...')
    this.userName = window.localStorage.getItem('user')
    if(!this.userName ){
      this.router.navigate(['/user/login'])
      // console.log('found ..')
      this.logout()
    }
    if(window.localStorage.getItem('loginUser')){
      // console.log('name ')
      this.logedin= true
      this.logedout = false
    }else{
      this.logout()
    }
    
  }
  loginUser(){
    
  }
  logout(){
    this.logedin= false
      this.logedout = true
    window.localStorage.clear()
    this.router.navigate(['/user/login'])

  }
  
}
