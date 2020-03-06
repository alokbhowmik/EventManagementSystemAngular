import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eventManagementAngular';
  userName: string = ""

  constructor(){
    // console.log('constructor calling ...')
    this.userName = window.localStorage.getItem('user')
    // if(this.userName.length )
  }
  
}
