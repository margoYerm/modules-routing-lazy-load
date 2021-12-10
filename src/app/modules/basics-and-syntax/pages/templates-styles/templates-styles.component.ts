import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates-styles',
  template: `
  <main class="all-page">
    <section class="content-block">
      <h2 class="h2">Component just in .ts</h2>
      <p>Learn Angular after remind TypeScript. 
      Vladilen Minin curses from Udemy, Patterns and Styles</p>
    </section>
  </main>
  `,
  styles: [`p {
    padding: 5px;
    border: 1px dotted green;
  }`]
})
export class TemplatesStylesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
