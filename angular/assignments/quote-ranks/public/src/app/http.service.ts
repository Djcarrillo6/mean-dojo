import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { };

  getAll(){
    return this._http.get('/api/items');
  };
  getOneById(id){
    return this._http.get('/api/items/' + id);
  };
  createAuthor(author){
    return this._http.post('/api/items', author);
  };
  addQuote(id, quote){
    return this._http.post('/api/items/' + id + '/quotes', quote);
  };
  updateAuthor(id, updatedAuthor){
    return this._http.put('/api/items/' + id, updatedAuthor);
  };
  deleteOne(id){
    return this._http.delete('/api/items/' + id);
  };
  deleteQuote(author_id, quote_id){
    return this._http.delete(`/api/items/${author_id}/quotes/${quote_id}`)
  };
  vote(id, quoteId, num){
    console.log("Vote method have been invoked.");
    console.log(num);
    return this._http.get('/api/authors/'+id+'/quotes/'+quoteId+'/'+num);
  }
};
