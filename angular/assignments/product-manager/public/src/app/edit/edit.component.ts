import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  product:any;
  prodInfo:any;
  oneId = this._httpService.show('');

  constructor(private _httpService: HttpService, private _router: Router) { }
  ngOnInit() {
    this.product = { title:"", price:"", productImage:"" };
    this.getOne(this.oneId);
  };

  getOne(oneId){
    let observable = this._httpService.show(oneId);
    observable.subscribe(data => {
      console.log("Fetched product: ", data);
      this.prodInfo = data;
      this.product ={title: this.prodInfo.title, price:this.prodInfo.price, imageUrl: this.prodInfo.imageUrl};
    })
  }
  editProduct(){
    let observable = this._httpService.updateProduct(this.oneId,this.product);
    observable.subscribe(data => {
      console.log("Updated", data);
      this.goHome();
    })
   
  }
  goHome(){
    this._router.navigate(['/home']);
  }
  deleteProduct(oneId){
    let observable = this._httpService.deleteProduct(this.oneId);
    observable.subscribe(product => {
      console.log("Deleted product: ", product)
      this.goHome();
    })
  }
}
