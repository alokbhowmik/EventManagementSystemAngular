import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data:any
  url = "http://127.0.0.1:8000"
  constructor(private httpClient:HttpClient) { }

  getData(){
    return this.httpClient.get(this.url+'/api/getdata')
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
    // console.log(data)
    let Options = {
      headers: httpHeaders
    }

    return this.httpClient.post(this.url+"/api/login",data,Options)
  }
}
