import {computed, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Joke} from '../mod7/interfaces/joke';
import {firstValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Mod8service {
  private readonly BASE_URL = 'https://api.chucknorris.io/jokes/random';
  private _joke = signal<Joke | null>(null)
  readonly joke = this._joke.asReadonly()
  readonly jokeLenght = computed(() => this._joke()?.value.length);


  constructor(private http: HttpClient) {
  }

  public getJoke() {
    this.http.get<Joke>(this.BASE_URL).subscribe(joke => {
      this._joke.set(joke)
    })
  }

  // Version async / await - transforme l'observable en promise --- pas recommandé
  public async getJoke2() {
    const joke = await firstValueFrom(this.http.get<Joke>(this.BASE_URL));
    this._joke.set(joke);
  }

}
