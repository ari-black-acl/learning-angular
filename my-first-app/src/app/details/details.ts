import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocationInfo } from '../housinglocation';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.html',
  styleUrl: `./details.css`
})
export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation : HousingLocationInfo | undefined;

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    // call HousingService to pass route param as an arg to getHousingLocationById
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }
}
