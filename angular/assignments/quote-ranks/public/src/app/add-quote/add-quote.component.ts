import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.scss']
})
export class AddQuoteComponent implements OnInit {
  currentQuoteObject: any;
  newQuoteContent: any;
  errors: String[] = [];
  author:any;

 
  constructor( private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.getOneFromService();
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      // console.log(this.currentQuoteObject._id);
    });
    this.newQuoteContent = { content: " " };
  };

  getOneFromService(){
    this._route.params.subscribe((params) =>{
      this._httpService.getOneById(params['id']).subscribe(data => {
        this.currentQuoteObject = data;
        this.author = data['author'];
        console.log(data);
      });
    });
  };

  addQuoteOnSubmit(){
    let observable = this._httpService.addQuote(this.currentQuoteObject._id, this.newQuoteContent);
    observable.subscribe(data => {
      this._router.navigate([`/quotes/${this.currentQuoteObject._id}`]);
    },
    error => {
      console.log(error);
      this.handleErrors(error.error);
    });
  };
  
  private handleErrors(errors: string[] | string) {
    this.errors = Array.isArray(errors) ? errors : [errors];
  }
};
