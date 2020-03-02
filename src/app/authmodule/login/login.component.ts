import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataService: DataService) { }

  isAdmin: boolean = false
  isEmployee: boolean = false
  isUser: boolean = false

  ngOnInit(): void {
  }
  loginFromGroup = new FormGroup({

    email: new FormControl(''),
    pwd: new FormControl(''),

  })


  onLogin(loginFromGroup) {

    // console.log(typeof(loginFromGroup.value))
    this.dataService.userLogin(loginFromGroup.value).subscribe(res => {
      console.log(res)

      switch (res.status) {
        case 1:
          this.isAdmin = true
          // window.localStorage.setItem()
          console.log('Admin login ...')
          break;
        case 2:
          this.isEmployee = true
          console.log('Employee is loged in ');
          break;
        case 3:
          this.isUser = true
          console.log('user is loged in ...')

          break;

        default:
          break;
      }

    })

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
}
