import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { EventModel } from './event-model.model';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  constructor(private dataService:DataService) { }
  eventFromGroup:FormGroup;
  event = new EventModel()

  ngOnInit(): void {
    this.eventFromGroup = new FormGroup({
      eventName: new FormControl("",[Validators.required]),
      eventVenue:new FormControl('',[Validators.required]),
      totalSit:new FormControl('',[Validators.required]),
      eventBanner:new FormControl(''),
      eventDate:new FormControl('',[Validators.required]),
      eventTime:new FormControl('',[Validators.required]),

    });
  }
  onEventSubmit(){
    console.log('hi...')
    this.event.eventName = this.eventFromGroup.value['eventName']
    this.event.eventVenue = this.eventFromGroup.value['eventVenue']
    this.event.totalSit = this.eventFromGroup.value['totalSit']
    this.event.eventBanner = this.eventFromGroup.value['eventBanner']
    this.event.eventDate = this.eventFromGroup.value['eventDate']
    this.event.eventTime = this.eventFromGroup.value['eventTime']
    this.dataService.addEvents(this.event).subscribe(res=>{
      console.log(res)
    })
  }

}
