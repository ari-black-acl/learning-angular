import {Component} from '@angular/core';
import {Home} from './home/home'  // to use in driver (import to driver src code)

@Component({
  selector: 'app-root',
  imports: [Home],      // import to driver component
  template: `
    <main>

      <!-- header, title and logo -->
      <header class='brand-name'>
        <img class='brand-logo' src='/assets/logo.svg' alt='logo' aria-hidden='true' />
      </header>

      <!-- main content -->
      <section class = 'content'>
        <app-home></app-home>
      </section>

    </main>
  `,
  styleUrls: ['./app.css'],
})

export class App {
  title = 'homes';      // component title
}
