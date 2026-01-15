import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Joke} from './interfaces/joke';
import {catchError, distinctUntilChanged, map, retry, switchMap, tap} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Mod7service {
  private readonly BASE_URL = 'https://api.chucknorris.io/jokes/random';

  constructor(private http: HttpClient) {
  }

  getJoke() {
    return this.http.get(this.BASE_URL)
  }

  getJokeTyped() {
    return this.http.get<any>(this.BASE_URL).pipe(
      map(res => {
          return {
            id: res.id,
            value: res.value,
            iconUrl: res.icon_url
          } as Joke;
        }
      ),
      // tap()                  ------ Utile pour logger
      // distinctUntilChanged() ------ bloque le flux si la réponse est identique
      // switchMap()            ------ Chainage de requête
      // retry(3)               ------ relance la requête n fois
      // catchError()
    )
  }

  // Ajouter un paramètre optionnel
  getJoke3(){
    const params = new HttpParams().set('name', 'joke');
    return this.http.get<Joke>(this.BASE_URL, {params:params}).subscribe()
  }



}
