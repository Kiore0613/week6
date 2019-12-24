import { TestBed } from '@angular/core/testing';

import { VehicleCollectionService } from './vehicle-collection.service';

describe('VehicleCollectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VehicleCollectionService = TestBed.get(VehicleCollectionService);
    expect(service).toBeTruthy();
  });
});
