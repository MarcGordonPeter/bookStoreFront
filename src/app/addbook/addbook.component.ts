import { NgForm, FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookstoreService } from '../bookstore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css'],
})
export class AddbookComponent {
  book: Book = new Book();

  constructor(private _service: BookstoreService, private _route: Router) {}

  addbookFormSubmit() {
    console.log(this._service.addbookFormSubmit(this.book).subscribe());
    this._route.navigate(['/viewbook']);
  }
}
