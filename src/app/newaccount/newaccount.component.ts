import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import db from './files/db.json';

@Component({
  selector: 'app-newaccount',
  templateUrl: './newaccount.component.html',
  styleUrls: ['./newaccount.component.css']
})
export class NewaccountComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
}
