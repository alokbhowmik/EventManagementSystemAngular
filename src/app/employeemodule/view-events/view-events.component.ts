import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-view-events',
  templateUrl: './view-events.component.html',
  styleUrls: ['./view-events.component.css']
})
export class ViewEventsComponent implements OnInit {

  events = []

  constructor(private dataService:DataService) { 
    this.viewEvents()
  }

  ngOnInit(): void {
  }

  //$$$$$$$$$$$$$$$ view events $$$$$$$$$$$$$$$ 
  viewEvents(){
    this.dataService.showEvents().subscribe(res=>{
   
      for(let key in res){
        this.events.push(res[key])
      }
    })
  }

  deleteEvent(id,i){
   
    this.dataService.deleteEvent(id).subscribe(res=>{
      console.log(res)
      id = res['id']
      if(id !=0){
        console.log('id is ' + id)
        this.events.splice(i,1)
        
      }else{
        alert('your can not delete this event ')
      }
    })
  }
}
