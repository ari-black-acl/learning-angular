import {Component} from '@angular/core';
import {Home} from './home/home'  // to use in driver (import to driver src code)
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Home, RouterModule],  // import to driver and routing components
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})

export class App {
  title = 'homes';      // component title
}
