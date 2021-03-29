import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Anonymous Notes Main Component';
  notes = [];
  newNote: any;

  constructor(private _httpService: HttpService){}

  // Initialize an empty newNote attribute for a new Note entry.
  ngOnInit() {
    this.newNote = { text: " " };
    this.getNotesFromService();
  };

  getNotesFromService() {
    let observable = this._httpService.getNoteList();
    observable.subscribe(data => {
      console.log(data['message'], data);
      this.notes = data['data'].reverse();
    });
  };

  // Method to submit the form to DB.
  onSubmit() {
    let observable = this._httpService.createNote(this.newNote);
    observable.subscribe( data => {
      console.log("Successful POST to database. Data: ", data);
      this.newNote = { text: " " };
    });
    this.getNotesFromService();
  };
};
