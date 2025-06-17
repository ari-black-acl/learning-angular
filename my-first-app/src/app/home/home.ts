import { Component, inject } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { CommonModule } from '@angular/common';
import { HousingLocationInfo } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocation],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})

export class Home {
  housingLocationList: HousingLocationInfo[] = [];          // init location list
  housingService: HousingService = inject(HousingService);  // inject dependencies

  constructor() {
    // get all locations to fill location list

    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
