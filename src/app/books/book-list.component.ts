import { Component, OnDestroy, OnInit } from "@angular/core";
import { IBook } from "./book";
import { BookService } from "./book.service";
import { Subscription } from "rxjs";
@Component({
    selector: 'pm-books',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy{
    pageTitle: string = 'Book List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string = '';
    sub!: Subscription;

    private _listFilter: string = '';
    get listFilter(): string{
        return this._listFilter;
    }
    set listFilter(value: string){
        this._listFilter = value;
        console.log('In setter:', value);
        this.filteredBooks = this.performFilter(value);
    }

    filteredBooks: IBook[] = [];

    books: IBook[] = [];

    // methods
    //we get the books from this service, which would go to a database to get the data
    constructor(private bookService: BookService){}

    performFilter(filterBy: string): IBook[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.books.filter((book: IBook) => 
            book.bookName.toLocaleLowerCase().includes(filterBy));
    }
    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.sub = this.bookService.getBooks().subscribe({
            next: books => {
                this.books = books,
                this.filteredBooks = this.books;
            },
            error: err => this.errorMessage = err
        });
        this.listFilter = '';
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    onRatingClicked(message: string): void{
        this.pageTitle = "Book List: " + message;
    }
}