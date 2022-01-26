import { Component, OnInit } from '@angular/core';
// import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-newaccount',
  templateUrl: './newaccount.component.html',
  styleUrls: ['./newaccount.component.css']
})
export class NewaccountComponent implements OnInit {
  constructor(private http:HttpClient){}
  onSubmit(data:any)
  {
    this.http.post("http://localhost:3000/posts",data)
    .subscribe((result)=>{
      console.warn("result",result)
    })
    console.warn(data);
  }


  // constructor(private user:UserService) { }
  // collection={}
  ngOnInit(): void {
  //   this.user.getList().subscribe((result)=>{
  //   console.warn(result)
  //   this.collection=result
  //   })
   }
}
