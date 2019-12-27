import { Component, OnInit, Input } from '@angular/core';
import { VehicleCollection } from '../models/vehicle-collection';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  isOpen = false;
  @Input() vehicles: VehicleCollection;
  constructor() { }

  ngOnInit() {
  }

}
