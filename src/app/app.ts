import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Comp1} from './mod8/comp1/comp1';
import {Comp2} from './mod8/comp2/comp2';
import {Comp3} from './mod8/comp3/comp3';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Comp1, Comp2, Comp3],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('DEMO1');
}
