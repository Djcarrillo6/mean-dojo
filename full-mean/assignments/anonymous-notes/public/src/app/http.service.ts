import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { };

  getNoteList() {
    return this._http.get('/api/notes');
  };

  createNote(note) {
    return this._http.post('/api/notes', note);
  };
};
