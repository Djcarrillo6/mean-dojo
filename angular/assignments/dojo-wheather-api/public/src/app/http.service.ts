import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getInfo(city){
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=6c3a835079f365cfdc03407754c87695`)
  }
}
