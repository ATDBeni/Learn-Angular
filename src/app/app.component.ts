import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div><h1>{{pageTitle}}</h1>
  <pm-products></pm-products>
  </div>`
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  pageTitle: String = 'Nike Store ';
}
