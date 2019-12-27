import { Country } from "./../models/country";
import { Component, OnInit } from "@angular/core";
import { Genre } from "../models/genre";
import { genresData } from "../mock/genres.mock";
import { countriesData } from "../mock/countries.mock";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  arrGenres: Array<Genre> = genresData;
  arrCountries: Array<Country> = countriesData;
  selectedCountry: string;
  selectedStates: Array<string>;

  constructor() {}

  ngOnInit() {}

  onSelected(country: string) {
    if (country) {
      this.selectedCountry = country;
      this.arrCountries
        .filter(countryItem => {
          return countryItem.country === country;
        })
        .map(stateItem => {
          if (stateItem.states) {
            this.selectedStates = stateItem.states;
          }
        });
    }
  }
  submit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
    }
  }
}
