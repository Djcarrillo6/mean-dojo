import { Component,OnInit } from '@angular/core';
import {HttpService} from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  cakes = [];
  cake: any;
  rateAndReview: any;
  newCake: any;
  showCake: Boolean;
  avg: Number;

  constructor(private _httpService: HttpService){};

  ngOnInit(){
    this.getCakesfromService();
    this.newCake = { baker:"", img:"" };
    this.rateAndReview = { rating:"", review:"" };
  }
  getCakesfromService(){
    let observable = this._httpService.getCakes();
    observable.subscribe(data => {
      this.cakes = data['data'];
    });
  };
  getOneCakefromService(id){
    let observable = this._httpService.getOneCake(id);
    observable.subscribe(data => {
      console.log("Fetched cake: ", data);
      this.cake = data['data'];

      // Average cake raing logic.
      var amountOfRatings = this.cake[0].rating;
      var sum = 0;
      for(var i = 0; i < amountOfRatings.length; i++){
        sum += amountOfRatings[i];
      };
      this.avg = Math.floor(sum/amountOfRatings.length);
      this.showCake = true;
    });
  };
  onSubmit(){
    let observable = this._httpService.addCake(this.newCake);
    observable.subscribe(data => {
      console.log("Added a cake to DB: ", data);
      this.newCake = { baker:"", img:"" };
    });
    this.getCakesfromService();
  };

  onUpdate(id){
    console.log(id,this.cake,this.rateAndReview);
    let observable = this._httpService.updateCake(id,this.rateAndReview);
    observable.subscribe(data => {
      console.log("Updated cake", data);
    });
  };
};
