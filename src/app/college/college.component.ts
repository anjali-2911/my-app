import { Component, OnInit } from '@angular/core';
import db from './files/db.json';

import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })
  collectData()
  {
    console.warn(this.loginForm.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
