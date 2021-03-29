import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restful Tasks CRUD';
  tasks: Array<{name:string, completed:boolean}> = [];

  constructor(private _HttpService: HttpService){}

  ngOnInit() {
    this._HttpService.getTasks() // Returns observerable, subscribe to fetch payload data.
      .subscribe(data => {
      console.log('tasks:', data);
      this.tasks = data;
    });
  }
}