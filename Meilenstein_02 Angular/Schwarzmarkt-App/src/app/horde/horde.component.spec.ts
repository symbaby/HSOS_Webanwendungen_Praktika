import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HordeComponent } from './horde.component';

describe('HordeComponent', () => {
  let component: HordeComponent;
  let fixture: ComponentFixture<HordeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HordeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HordeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
