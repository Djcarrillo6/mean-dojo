import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
  createdAuthor: any;
  newAuthor: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
    // this._route.params.subscribe((params: Params) => {
    //   console.log(params['id'])
    // });
    this.newAuthor = { name: "" }
  };

  goHome() {
    this._router.navigate(['/home']);
  };

  onSubmit(){
    this._httpService.addAuthor(this.newAuthor).subscribe(data => {
      console.log(`A new author has been saved to the database! Author Data: `, data);
      this.createdAuthor = data;
      this.goHome();
    });
  };
};