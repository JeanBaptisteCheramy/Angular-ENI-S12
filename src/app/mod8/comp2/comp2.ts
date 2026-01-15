import { Component } from '@angular/core';
import {Mod8service} from '../mod8service';

@Component({
  selector: 'app-comp2',
  imports: [],
  templateUrl: './comp2.html',
  styleUrl: './comp2.css',
})
export class Comp2 {
  joke

  constructor(private apiService:Mod8service) {
    this.joke = this.apiService.joke;
  }

}
