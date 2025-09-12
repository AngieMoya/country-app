import type { Country } from '../interfaces/country.interface';
import type { RESTCountry } from '../interfaces/rest-countries.interface';
import { Name } from '../interfaces/rest-countries.interface';

export class CountryMapper {
  static mapRestCountryToCountry(restCountry: RESTCountry): Country {
    //
    const countryCurrencies = () => {
      let currencies = '';
      for (const key in restCountry.currencies) {
        currencies = currencies + restCountry.currencies[key].name;
      }

      return currencies;
    };

    const countryLanguage = () => {
      let languages = '';
      for (const key in restCountry.languages) {
        languages = languages + restCountry.languages[key];
      }
      return languages;
    };

    return {
      cca2: restCountry.cca2,
      flag: restCountry.flag,
      flagSvg: restCountry.flags.svg,
      name: restCountry.name.common,
      capital: restCountry.capital.join(','),
      population: restCountry.population,
      region: restCountry.region,
      subregion: restCountry.subregion,
      continent: restCountry.continents.join(','),
      languages: countryLanguage(),
      coin: countryCurrencies(),
      area: restCountry.area,
      limits: restCountry.borders.join(', '),
    };
  }
  static mapRestCountryToCountryArrays(
    restCountries: RESTCountry[]
  ): Country[] {
    return restCountries.map(this.mapRestCountryToCountry);
  }
}
