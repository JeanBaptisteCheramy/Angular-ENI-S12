import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-demo1',
  imports: [],
  templateUrl: './demo1.html',
  styleUrl: './demo1.css',
  standalone: true,
})
export class Demo1 {

  public username?: string;

  constructor() {
    this.username = 'JB';
  }

  changeName(){
    this.username ===  'JB' ?  this.username = 'Jobobo' : this.username = 'JB';

  }
}
