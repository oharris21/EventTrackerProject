import { TestBed } from '@angular/core/testing';

import { NutritionService } from './nutrition.service';

describe('NutritionDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NutritionService = TestBed.get(NutritionService);
    expect(service).toBeTruthy();
  });
});
