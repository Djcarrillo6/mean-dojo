import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { QuotesComponent } from './quotes/quotes.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'new', component: AddComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'quotes/:id', component: QuotesComponent },
  { path: 'write/:id', component: AddQuoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }