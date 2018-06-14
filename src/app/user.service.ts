import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isUserLoggedIn;

  constructor() { 
    this.isUserLoggedIn = false;
  }
  setUserLogin(){
    this.isUserLoggedIn= true;
  }
  getUserLogIn(){
    return this.isUserLoggedIn;
  }
}
