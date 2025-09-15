import { Component, input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'country-stat',
  imports: [DecimalPipe],
  templateUrl: './stat.component.html',
})
export class StatComponent {
  country = input.required<Country>();
}
