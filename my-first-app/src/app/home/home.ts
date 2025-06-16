import { Component } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocation],
  template: `
    <section>

    <!-- search filter and button -->
      <form>
        <input type='text' placeholder='Filter by city' />
        <button class='primary' type='button'> Search </button>
      </form>
    </section>

    <!-- search results -->
     <section class='results'>
        <app-housing-location></app-housing-location>
     </section>
  `,
  styleUrls: ['./home.css']
})

export class Home {

}
