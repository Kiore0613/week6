import { VehicleCollection } from './../models/vehicle-collection';
import { vehicleData } from './../mock/vehicles.mock';
import { Vehicle } from './../models/vehicle';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  arrVehicle: Array<Vehicle> = vehicleData;
  arrAmerican: VehicleCollection[] = [{
    categoryName: 'American',
    vehicleCollection: this.arrVehicle.filter(category => (category.category === 'American'))
  }];
  arrJapanese: VehicleCollection[] = [{
    categoryName: 'Japanese',
    vehicleCollection: this.arrVehicle.filter(category => (category.category === 'Japanese'))
  }];
  arrGermany: VehicleCollection[] = [{
    categoryName: 'Germany',
    vehicleCollection: this.arrVehicle.filter(category => (category.category === 'Germany'))
  }];

  arrVehicleCollection = [...this.arrAmerican, ...this.arrJapanese, ...this.arrGermany];

  constructor() { }

  ngOnInit() {
    console.log(this.arrVehicleCollection);
  }

}
