import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlpacientesComponent } from './controlpacientes.component';

describe('ControlpacientesComponent', () => {
  let component: ControlpacientesComponent;
  let fixture: ComponentFixture<ControlpacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlpacientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlpacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
