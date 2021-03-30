import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  product:any;
  productObjectId: String;

  constructor(private _http: HttpClient) { };

  getAll() {
    return this._http.get('/api/products');
  };
  getProductById(id) {
    return this._http.get('/api/products/' + id);
  };
  addProduct(product) {
    return this._http.post('/api/products', product)
  };
  updateProduct(id, product) {
    console.log(`The ${product} product, has been selected.`);
    return this._http.put('/api/products/' + id, product);
  };
  deleteProduct(id){
    return this._http.delete('/api/products/' + id);
  };
  show(id){
    this.productObjectId = id;
    return this._http.get('/api/products/' + id);
  };
}
