import {Component} from '@angular/core';
import {Mod8service} from '../mod8service';

@Component({
  selector: 'app-comp3',
  imports: [],
  templateUrl: './comp3.html',
  styleUrl: './comp3.css',
})
export class Comp3 {
  jokeLength:any

  constructor(private apiService:Mod8service) {

  }
}
