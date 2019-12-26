import { Component, OnInit } from '@angular/core';
import { Genre } from '../models/genre';
import { genresData } from '../mock/genres.mock';
import { Country } from '../models/country';
import { countriesData } from '../mock/countries.mock';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  arrGenres: Array<Genre> = genresData ;
  arrCountries: Array<Country> = countriesData;
  constructor() {
  }

  ngOnInit() {
    console.log(this.arrGenres);
  }

  submit(form) {
    console.log(form.value);
  }

}
