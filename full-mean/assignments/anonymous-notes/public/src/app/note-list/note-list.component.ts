import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent {
  title = 'Anonymous Notes NoteList Component';
  @Input() wallOfNotes = [];

  constructor(private _httpService: HttpService) { }
  
};
