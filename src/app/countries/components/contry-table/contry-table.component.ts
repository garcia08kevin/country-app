import { Component, Input } from '@angular/core';
import { Country } from '../../interface/country';

@Component({
  selector: 'countries-table',
  templateUrl: './contry-table.component.html',
  styles: [
    `img{
      width: 25px
    }`
  ]
})
export class ContryTableComponent {
  @Input()
  public countries:Country[] = [];
}
