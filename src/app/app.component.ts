import { Component } from '@angular/core';

@Component({
  selector: 'bhc-root',
  template: `
    <div>
      <bhc-header></bhc-header>
      <h1>{{ title }}</h1>
      <bhc-footer></bhc-footer>
    </div>
  `,
})
export class AppComponent {
  title = 'banking-hubs-challenge';
}
