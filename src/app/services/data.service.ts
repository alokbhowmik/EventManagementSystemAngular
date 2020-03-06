import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data:any
  url = "http://127.0.0.1:8000"
  // viewEmployee
  constructor(private httpClient:HttpClient) { }

  getData(){

    return this.httpClient.get(this.url+'/api/getdata')
  }
  // $$$$$$$$$$$$$ VIEW EMPLOYEE $$$$$$$$$$$$$
  viewEmployee(){
    const httpHeaders = new HttpHeaders({
      'Token': window.localStorage.getItem('token')
    })
    
    let Options = {
      headers: httpHeaders
    }
    return this.httpClient.get(this.url+'/api/viewEmployee',Options)
  }
  insertUserData(data){
    // http://localhost:8000/showdata
    const httpHeaders = new HttpHeaders({
      'Content-Type':'application/json'
    })
    // console.log(data)
    let Options = {
      headers: httpHeaders
    }
    return this.httpClient.post(this.url+'/api/savedata',data, Options)
  }

  // user Logied in 

  userLogin(data){
    const httpHeaders = new HttpHeaders({
      'Content-Type':'application/json'
    })
    
    let Options = {
      headers: httpHeaders
    }

    return this.httpClient.post(this.url+"/api/login",data,Options)
  }

  //$$$$$$$$$$$$$$$$$$$$$ DELETE EMPLOYEE $$$$$$$$$$$$$$$$
  deleteEmployee(userId){
    return this.httpClient.get(this.url+'/api/deleteEmployee/'+userId)
    
  }


  //$$$$$$$$$$$$$$$$$$$$$$$ SHOW EVENTS $$$$$$$$$$$$$$$$$$

  showEvents(){
    return this.httpClient.get(this.url+'/api/showevents')
  }

  //$$$$$$$$$$$$$$$$$$$$ DELETE EVENTS $$$$$$$$$$$$$$$$$$
  
  deleteEvent(id){
    return this.httpClient.get(this.url+'/api/delete_events/' +id)
  }

  //$$$$$$$$$$$$$$$$$$$$ VIEW USER $$$$$$$$$$$$$$$$$$$$$$$
  
  viewUsers(){
    
    return this.httpClient.get(this.url+"/api/viewUsers")
  }
  //$$$$$$$$$$$$$$$$$$$$ DELETE USER $$$$$$$$$$$$$$$$$$$$$$$
  deleteUser(id){
    return this.httpClient.get(this.url+"/api/deleteEmployee/"+id)
  }
}
