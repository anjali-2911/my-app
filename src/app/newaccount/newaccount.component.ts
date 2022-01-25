import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-newaccount',
  templateUrl: './newaccount.component.html',
  styleUrls: ['./newaccount.component.css']
})
export class NewaccountComponent implements OnInit {


  constructor(private user:UserService) { }
  collection={}
  ngOnInit(): void {
    this.user.getList().subscribe((result)=>{
    console.warn(result)
    this.collection=result
    })
  }
}
