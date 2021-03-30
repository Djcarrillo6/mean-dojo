import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  title = 'Products List';
  products:any=[];

  constructor(private _httpService: HttpService,  private _router: Router) { };

  ngOnInit() {
    this.getAllProducts();
  };

  getAllProducts() {
    let observable = this._httpService.getAll();
    observable.subscribe(data => {
      console.log(data)
      this.products = data['data']
      console.log('Products have been fetched form the database');
    });
  };

  sendToEditProduct(id){
    this._httpService.show(id);
    this.editProduct();
  }

  editProduct(){
    this._router.navigate(['/edit/' + this._httpService.productObjectId]);
  }

  deleteProduct(id){
    let observable = this._httpService.deleteProduct(id);
    observable.subscribe(product=>{
      console.log("Deleted", product)
    })
    this.getAllProducts();
  }
}
