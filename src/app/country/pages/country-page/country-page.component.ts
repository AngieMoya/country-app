import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { NotFoundComponent } from '../../../shared/components/not-found/not-found.component';
import { CountryInformationComponent } from './country-information/country-information.component';

@Component({
  selector: 'app-country-page',
  imports: [NotFoundComponent, CountryInformationComponent],
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent {
  countrycode = inject(ActivatedRoute).snapshot.params['code'];
  countryservice = inject(CountryService);

  countryResource = rxResource({
    params: () => ({ code: this.countrycode }),
    stream: ({ params }) => {
      return this.countryservice.searchCountryByAlphaCode(params.code);
    },
  });
}
