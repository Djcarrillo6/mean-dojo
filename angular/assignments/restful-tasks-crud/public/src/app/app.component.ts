import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'public';
  tasks = [];
  currentTask = [];
  showTasks: Boolean = false;
  showTask: Boolean;
  newTask: any;

  constructor(private _httpService: HttpService){}

  // Clear the newTask object each time the component is initialized.
  ngOnInit(){
    this.newTask = { title: "", description: ""};
    this.getTasksFromService();
  };

  onButtonClick(){
    this.showTasks = !this.showTasks;
  };

  // Use the _httpService to subscribe to the getTasks() observable.
  // Set the fetched data as the current value of the 'tasks' attribute.
  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log(data);
      this.tasks = data['data'];
    });
  };

  // Use _httpService to POST HTTP data to the server ---> API
  // Clear out the newTask object after successfully posting. 
  onSubmit(){
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe( data => {
      console.log("Successful POST to database. Data: ", data);
      this.newTask = {title: "", description: ""};
    });
    this.getTasksFromService();
  };

  // Use _httpService to updateTask and pass in the taskId & task object currently in the `currentTask` attribute.
  onUpdate(id){
    let observable = this._httpService.updateTask(id, this.currentTask[0]);
    observable.subscribe( data => {
      console.log("Updated task in database. Data: ", data);
      this.newTask = {title: "",description: ""};
    });
  };

  // Use _httpService to delete a task; method accept's taskId & task object currently in the `currentTask` attribute.
  onDelete(id){
    let observable = this._httpService.destroyTask(id, this.currentTask[0]);
    observable.subscribe(data => {
      console.log("Deleted task from database. Data:", data);
      this.newTask = {title: "",description: ""};
    });
  };

  // Select a task by click event, call `getOneTask()` to set it as current task object in the 'currentTask' attribute. 
  selectedTask(event: any){
    this.showTask = true;
    console.log(event['target']);
    this.getOneTask(event['target']['value']);
  };

  // Use _httpService to select a task by it's ID, set it as the current task object in the  `currentTask` attribute. 
  getOneTask(id:String ){
    let observable = this._httpService.getTaskbyID(id);
      observable.subscribe(data => {
      console.log('success', data);
      this.currentTask = data['data'];
      console.log(data['data']);
    });
  };
};
