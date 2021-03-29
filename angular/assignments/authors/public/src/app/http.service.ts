import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { };

  getAuthors(){
    return this._http.get('/api/authors');
  };
  getAuthorById(id){
    return this._http.get('/api/authors/' + id);
  };
  addAuthor(newAuthor){
    return this._http.post('/api/authors', newAuthor)
  };
  editAuthor(id, authorToShow){
    console.log(`Author ${authorToShow} has been selected.`);
    return this._http.put('/api/authors/' + id, authorToShow);
  };
  deleteAuthor(id){
    return this._http.delete('/api/authors/' + id);
  };
};