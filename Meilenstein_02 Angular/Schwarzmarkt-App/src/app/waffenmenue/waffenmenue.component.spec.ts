import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaffenmenueComponent } from './waffenmenue.component';

describe('WaffenmenueComponent', () => {
  let component: WaffenmenueComponent;
  let fixture: ComponentFixture<WaffenmenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaffenmenueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaffenmenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
