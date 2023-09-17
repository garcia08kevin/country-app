import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../countries.service';
import { Country } from '../../interface/country';
import { Region } from '../../interface/region.type';


@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {
  constructor(private countriesService:CountriesService){}
  public countries: Country[]= [];
  public regions:Region[] = ['Africa','Americas','Asia','Europe','Oceania'];
  public selectedRegion?: Region;

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.term;
  }

  searchByRegion(region: Region): void {
    this.selectedRegion = region;
    this.countriesService.searchRegion(region).subscribe(countries=>
      this.countries = countries);
  }
}
