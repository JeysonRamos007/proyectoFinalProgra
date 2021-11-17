import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlconsultasComponent } from './controlconsultas.component';

describe('ControlconsultasComponent', () => {
  let component: ControlconsultasComponent;
  let fixture: ComponentFixture<ControlconsultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlconsultasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlconsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
