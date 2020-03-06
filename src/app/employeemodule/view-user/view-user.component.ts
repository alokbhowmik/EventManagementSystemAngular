import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  users = []
  arr = [1,2,3,4,5,6,7,8]

  constructor(private dataService:DataService) { 
  }
  
  ngOnInit(): void {
    this.viewUser()
  }


  // $$$$$$$$$$$$$$$$$$$$$$$ VIEW USER $$$$$$$$$$$$$$$$$$$$$$$

  viewUser(){
    
    this.dataService.viewUsers().subscribe(res =>{
      // console.log(res)
      for(let key in res){
        this.users.push(res[key])
      }
    })
  }


  // $$$$$$$$$$$$$$$$$$$$$$ DELETE USER $$$$$$$$$$$$$$$$$$$$$$

  deleteUser(id,i){
    console.log("The user id is "+id)
    this.users.splice(i,1)

    this.dataService.deleteUser(id).subscribe(res=>{
      console.log(res);
      alert(res['message'])
    })
    
  }
}
