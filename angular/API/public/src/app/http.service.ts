import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getPokemon();
  };

  getPokemon() {
    let pokemon = this._http.get('https://pokeapi.cp/api/v2/pokemon/1').subscribe(data => {
      console.log(`Your fecthed Pokemon is: `, data);
    })
  };
};
