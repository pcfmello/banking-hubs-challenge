import { Component } from '@angular/core';

@Component({
  selector: 'bhc-root',
  template: `
    <div>
      <header>
        <bhc-header></bhc-header>
      </header>
      <main>
        <h1>{{ title }}</h1>
      </main>
      <footer>
        <bhc-footer></bhc-footer>
      </footer>
    </div>
  `,
})
export class AppComponent {
  title = 'banking-hubs-challenge';
}
