import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookListComponent } from './books/book-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { BookDetailComponent } from './books/book-detail.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  // you declare your different components here
  declarations: [
    AppComponent,
    WelcomeComponent,
    BookListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
