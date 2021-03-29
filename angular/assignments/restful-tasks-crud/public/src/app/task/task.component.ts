import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

   // use the @Input decorator to indicate this comes from the parent
  @Input() taskToShow: any; 
  constructor() { };

  ngOnInit() {
  };
};
