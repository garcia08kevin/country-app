import { Component, OnInit } from '@angular/core';
import { Country } from '../../interface/country';
import { CountriesService } from '../../countries.service';

@Component({
  selector: 'countries-by-contry-page',
  templateUrl: './by-contry-page.component.html',
  styles: [
  ]
})
export class ByContryPageComponent implements OnInit {
  constructor(private countriesService:CountriesService){}
  public countries: Country[]= [];
  public initialValue: string = '';

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  }

  searchByCountry(term: string): void {
    this.countriesService.searchCountry(term).subscribe(countries=>
      this.countries = countries);
    console.log({term})
  }
}
