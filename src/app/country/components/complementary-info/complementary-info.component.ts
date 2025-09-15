import { Component, input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'country-complementary-info',
  imports: [],
  templateUrl: './complementary-info.component.html',
})
export class ComplementaryInfoComponent {
  country = input.required<Country>();
}
