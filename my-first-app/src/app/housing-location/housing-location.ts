import { Component, input } from '@angular/core';
import { HousingLocationInfo } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [RouterModule],
  templateUrl: './housing-location.html',
  styleUrls: ['./housing-location.css']
})

export class HousingLocation {
  housingLocation = input.required<HousingLocationInfo>();
}
