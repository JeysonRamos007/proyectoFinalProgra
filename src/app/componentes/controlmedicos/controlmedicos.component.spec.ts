import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlmedicosComponent } from './controlmedicos.component';

describe('ControlmedicosComponent', () => {
  let component: ControlmedicosComponent;
  let fixture: ComponentFixture<ControlmedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlmedicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlmedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
