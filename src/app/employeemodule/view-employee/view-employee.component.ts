import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  employees = []
  constructor(private dataService:DataService) { this.viewEmp()}

  ngOnInit(): void {
  }

  viewEmp(){
    this.employees.slice(0,this.employees.length-1)
    this.dataService.viewEmployee().subscribe(res=>{
      // console.log(res)
      for(let key in res){
        // console.log(res[key])
        this.employees.push(res[key])
      }
    })
    // console.log(this.employees)
  }
  deleteEmployee(id,index:number){
    console.log('delete employee ...'+ id)
    this.employees.splice(index,1)
    this.dataService.deleteEmployee(id).subscribe(res =>{
      console.log(res)
      alert(res['user']+res['message'])
    })
    
  }
}
