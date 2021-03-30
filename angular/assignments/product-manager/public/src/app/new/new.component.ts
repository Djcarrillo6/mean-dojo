import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  product:any;
  errors: String[];


  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.product={ title:"", price:"", imageUrl:"" };
  }
  
  createProd(){
    console.log("we enter here why?");
    let observable = this._httpService.addProduct(this.product);
    observable.subscribe(data => {
      console.log('New product created!, ' + data['data']);
      this.goHome();
    }, 
      error => {
      console.log(error);
      this.handleErrors(error.error);
    })
  };
  goHome(){
    this._router.navigate(['/products']);
  };

  private handleErrors(errors: string[] | string) {
    this.errors = Array.isArray(errors) ? errors : [errors];
  }
}
