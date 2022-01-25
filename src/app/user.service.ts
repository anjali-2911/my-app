import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  url="http://localhost:3000/posts"
  getList()
  {
   return this.http.get(this.url); 
  }
  // saveUser(data){
  //   console.warn("service",data)
  //  return this.http.post(this.url.data)
  // }
}
