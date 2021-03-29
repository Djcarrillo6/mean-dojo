import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  authorToShow: any;
  editedAuthor: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { };

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(`The Edit component has been initialized with the received Author._id of: ${params['id']}`);
    });
    this.getAuthorFromService();
  };

  getAuthorFromService(){
    this._route.params.subscribe((params) =>{
      this._httpService.getAuthorById(params['id']).subscribe(data =>{
        this.authorToShow = data;
        console.log(`The authorToShow component attribute has been set to the value of: ${data}`);
      });
    });
  };

  goHome() {
    this._router.navigate(['/home']);
  };

  saveEditedAuthor(id) {
    this._route.params.subscribe((params)=>{
      this._httpService.editAuthor(params['id'], this.authorToShow).subscribe(data =>{
        console.log(`Author with _id of ${id}, has been modified and updated to the database.`);
      this.editedAuthor = data;
      this.goHome();
      });
    });
  };
};