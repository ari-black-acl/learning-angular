import {Component} from '@angular/core';
import {Home} from './home/home'  // to use in driver (import to driver src code)

@Component({
  selector: 'app-root',
  imports: [Home],      // import to driver component
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})

export class App {
  title = 'homes';      // component title
}
