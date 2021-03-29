import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authors: any;
  authorToShow: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAuthorsFromService();
  };
  getAuthorsFromService(){
    this._httpService.getAuthors().subscribe(data => {
      console.log(`All author objects have been fetched from the database: `, data);
      this.authors = data;
    });
  };
  clickToDeleteAuthor(id) {
    this._httpService.deleteAuthor(id).subscribe(data => {
      console.log(`Author with ID of: ${id} was deleted from the database`, data);
      this.getAuthorsFromService();
    });
  };

};
