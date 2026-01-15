import { Component } from '@angular/core';
import {Mod8service} from '../mod8service';

@Component({
  selector: 'app-comp1',
  imports: [],
  templateUrl: './comp1.html',
  styleUrl: './comp1.css',
})
export class Comp1 {
  joke

  constructor(private apiService:Mod8service) {
    this.joke = this.apiService.joke;
  }

  loadJoke() {
    this.apiService.getJoke()
  }

}
