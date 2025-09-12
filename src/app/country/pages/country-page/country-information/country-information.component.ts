import { Component, input } from '@angular/core';
import { Country } from '../../../interfaces/country.interface';
import { StatComponent } from './stat/stat.component';

@Component({
  selector: 'country-information-page',
  imports: [StatComponent],
  templateUrl: './country-information.component.html',
})
export class CountryInformationComponent {
  country = input.required<Country>();
}
