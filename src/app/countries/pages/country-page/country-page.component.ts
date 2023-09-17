import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interface/country';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor(private activatedRoute:ActivatedRoute,
    private routes: Router,
    private countriesService:CountriesService,
    ){}
  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.countriesService.searchCountryByAlphaCode(id))
    )
    .subscribe((country) =>{
      if(!country) return this.routes.navigateByUrl('');
      return this.country = country;
    });
  }

}
