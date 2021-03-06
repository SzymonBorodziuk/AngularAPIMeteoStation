import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirQualityComponentComponent } from './air-quality-component.component';

describe('AirQualityComponentComponent', () => {
  let component: AirQualityComponentComponent;
  let fixture: ComponentFixture<AirQualityComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirQualityComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirQualityComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
