import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth-service';

@Component({
  selector: 'app-mod4-demo1',
  imports: [],
  templateUrl: './mod4-demo1.html',
  styleUrl: './mod4-demo1.css',
  standalone: true
})
export class Mod4Demo1 {
  username?: string;
  constructor(private authService: AuthService) {
  }



  logout() {
    this.authService.logout()
    this.username = ""
  }

  login() {
    this.authService.login()
    this.username = this.authService.getUser().name
  }

}
