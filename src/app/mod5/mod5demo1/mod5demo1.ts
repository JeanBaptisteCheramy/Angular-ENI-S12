import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mod5demo1',
  imports: [],
  templateUrl: './mod5demo1.html',
  styleUrl: './mod5demo1.css',
  standalone: true
})
export class Mod5demo1 {

  constructor(private router: Router) {
  }

  goToAbout() {
    this.router.navigate(['/about']);
  }
  goToDetail() {
    this.router.navigate(['/detail', 123]);
  }

}
