import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
  <div><h1>{{pageTitle}}</h1>
    <pm-books></pm-books>
  </div>
  `

})
export class AppComponent {
  pageTitle: string = 'Book Tracker'
}