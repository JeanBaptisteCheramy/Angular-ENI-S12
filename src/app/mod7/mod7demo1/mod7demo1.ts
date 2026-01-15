import {ChangeDetectorRef, Component} from '@angular/core';
import {Mod7service} from '../mod7service';
import {AsyncPipe, JsonPipe} from '@angular/common';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-mod7demo1',
  imports: [
    JsonPipe,
    AsyncPipe
  ],
  templateUrl: './mod7demo1.html',
  styleUrl: './mod7demo1.css',
})
export class Mod7demo1 {
  public joke: any
  public jokeObservable$: Observable<any>;

  constructor(private apiService: Mod7service, private cdr: ChangeDetectorRef) {
    this.apiService.getJoke().subscribe(response => {
      this.joke = response;
      this.cdr.detectChanges();
    })
    this.jokeObservable$ = this.apiService.getJoke()
  }


}
