import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  login(){
    const user = {name: 'Michel'}
    localStorage.setItem('username', JSON.stringify(user));
  }

  logout(){
    localStorage.removeItem('username');
  }

  isLoggedIn(){
    return !!localStorage.getItem('username');
  }

  getUser(){
    return JSON.parse(localStorage.getItem('username')!);
  }

}
