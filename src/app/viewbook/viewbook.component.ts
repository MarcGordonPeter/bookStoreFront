import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookstoreService } from '../bookstore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css'],
})
export class ViewbookComponent implements OnInit {
  books: Array<Book> = [];

  constructor(private _service: BookstoreService, private _route: Router) {}

  ngOnInit(): void {
    this.getBooks();
  }
  getBooks() {
    this._service.getBooksFromServer().subscribe((data) => {
      console.log(data);
      this.books = data;
    });
  }

  deleteBook(id: number) {
    this._service.deleteBook(id).subscribe();
    location.reload();
  }

  FilterLatestBook() {
    this._service
      .getLatestBooksFromServer()
      .subscribe((data) => (this.books = [data]));
  }
  FilterOldestBook() {
    this._service.getOldestBooksFromServer().subscribe((data) => {
      this.books = [data];
    });
  }

  RedirectToAddBook() {
    this._route.navigate(['/addbook']);
  }
}
