import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  url:string="http://localhost"
  getList()
  {
    console.warn("some data");
    
    // return this.http.post(this.url,data);
  }
}
