import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  quoteObjects: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    console.log('HomeComponent has been initialized.');
    this.getAllFromService();
  };

  getAllFromService(){
    this._httpService.getAll().subscribe(data => {
      console.log(`Got all Quote objects from the database. Collection: `, data);
      this.quoteObjects = data;
    });
  };
};
