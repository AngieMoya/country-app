import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { CountryMapper } from '../mappers/country.mapper';
import { map, Observable, catchError, throwError, delay } from 'rxjs';
import type { Country } from '../interfaces/country.interface';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);

  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase();

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`).pipe(
      map((restCountries) =>
        CountryMapper.mapRestCountryToCountryArrays(restCountries)
      ),
      catchError((error) => {
        console.log('Error fetching', error);

        return throwError(
          () => new Error(`Could not get countries with that query: ${query}`)
        );
      })
    );
  }
  searchByCountry(query: string): Observable<Country[]> {
    query = query.toLowerCase();
    const url = `${API_URL}/name/${query}`;

    return this.http.get<RESTCountry[]>(url).pipe(
      map((restCountries) =>
        CountryMapper.mapRestCountryToCountryArrays(restCountries)
      ),
      delay(2000),
      catchError((error) => {
        console.log('Error fetching', error);

        return throwError(
          () => new Error(`Could not get countries with that query: ${query}`)
        );
      })
    );
  }

  searchCountryByAlphaCode(code: string) {
    const url = `${API_URL}/alpha/${code}`;

    return this.http.get<RESTCountry[]>(url).pipe(
      map((restCountries) =>
        CountryMapper.mapRestCountryToCountryArrays(restCountries)
      ),
      map((countries) => countries.at(0)),
      catchError((error) => {
        console.log('Error fetching', error);

        return throwError(
          () => new Error(`Could not get countries with that code: ${code}`)
        );
      })
    );
  }
}
