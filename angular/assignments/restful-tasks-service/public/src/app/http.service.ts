import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
  export class HttpService {
  // Dependency injection in the constructor, injected at run-time.
  constructor(private _http: HttpClient) { 
  };

  // getTasks() wraps around the '.get' request method provided by the injected HttpClient module.
  getTasks(){
    return this._http.get<{name:string,completed: boolean}[]>('/api/tasks');
  };

}
