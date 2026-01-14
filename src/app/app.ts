import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Mod6demo1} from './mod6/mod6demo1/mod6demo1';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Mod6demo1],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('DEMO1');
}
