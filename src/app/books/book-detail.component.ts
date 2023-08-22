import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  pageTitle: string  = "Book Details";
  constructor() { }

  ngOnInit(): void {
  }

}
