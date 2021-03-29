import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

// Service class methods that serve as wrapper functions that surround various CRUD HTTP method calls provided by the imported HttpClient module.

export class HttpService {

  // Inject the HttpClient module as a required dependency by type casting it to the constructor as a parameter. 
  constructor(private _http: HttpClient) { }

  // * All strings provided as args to the HttpClient methods match the string pattern in the `routes` modular on my backend server.

  getTasks() {
    return this._http.get('/api/tasks');
  };
  
  getTaskbyID(id: String){
    return this._http.get(`/api/tasks/${id}`)
  };

  addTask(task){
    return this._http.post('/api/tasks', task)
  };

  updateTask(id, task){
    return this._http.put(`/api/tasks/${id}`, task)
  };

  destroyTask(id, task){
    return this._http.delete(`/api/tasks/${id}`, task)
  };
};
