import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionListComponent } from './nutrition-list.component';

describe('NutritionComponent', () => {
  let component: NutritionListComponent;
  let fixture: ComponentFixture<NutritionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutritionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
