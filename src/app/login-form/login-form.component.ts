import { Component, OnInit } from '@angular/core';
import {RouterModule,Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router:Router, private user:UserService) { }

  ngOnInit() {
  }
loginUser(e){
  e.preventDefault();
  var username= e.target.elements[0].value;
  var password = e.target.elements[1].value;
  if(username=='admin' && password=='admin')
  this.user.setUserLogin();
  this.router.navigate(['dashboard']);
  console.log(username,password);
}
}
