import { Component, input } from '@angular/core';
import { Country } from '../../../interfaces/country.interface';
import { StatComponent } from '../../../components/stat/stat.component';
import { ComplementaryInfoComponent } from '../../../components/complementary-info/complementary-info.component';

@Component({
  selector: 'country-information-page',
  imports: [StatComponent, ComplementaryInfoComponent],
  templateUrl: './country-information.component.html',
})
export class CountryInformationComponent {
  country = input.required<Country>();
}
