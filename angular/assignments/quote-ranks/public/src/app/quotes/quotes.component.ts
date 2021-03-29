import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  authorName: any;
  author: any;
  currentQuoteObjectId: any;
  quotes: any = [];
  currentQuoteObject: any;

  constructor( private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
    });
    this.getOneFromService();
  }

  getOneFromService(){
    this._route.params.subscribe((params) =>{
      this._httpService.getOneById(params['id']).subscribe(data =>{
        this.currentQuoteObjectId = params['id'];
        this.currentQuoteObject = data;
        this.author = data;
        this.authorName = data['author'];
        this.quotes = data['quotes'];
        console.log(data['quotes']);
      });
    });
  };

  deleteOnClick(quote){
    this._route.params.subscribe((params: Params) => {
      console.log(quote['_id']);
    });
    this._httpService.deleteQuote(this.currentQuoteObjectId, quote['_id']).subscribe(data => {
      this.currentQuoteObject = data;
      this.getOneFromService();
    })
  }

  vote(id,quote,num){
console.log(id,quote,num);
    let ob = this._httpService.vote(id,quote['_id'],num+quote.votes);
    ob.subscribe(data=>{
      console.log("Upvoted",data)
      this.getOneFromService();
    })
  }

  goHome() {
    this._router.navigate(['/home']);
  };

};
