import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {
  constructor(private http:HttpClient){}
  onSubmit(data:any)
  {
    this.http.post("http://localhost:3000/comments",data)
    .subscribe((result)=>{
      console.warn("result",result)
    })
    console.warn(data);
  }


  ngOnInit(): void {
  }

}
