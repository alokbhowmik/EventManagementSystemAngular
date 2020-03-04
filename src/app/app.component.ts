import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eventManagementAngular';
  userValue: string = ""

  constructor(){
    console.log('constructor calling ...')
    this.userValue = window.localStorage.getItem('user')
    console.log(this.userValue)
  }
  
}
