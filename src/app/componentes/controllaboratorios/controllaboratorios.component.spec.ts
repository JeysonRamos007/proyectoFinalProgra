import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllaboratoriosComponent } from './controllaboratorios.component';

describe('ControllaboratoriosComponent', () => {
  let component: ControllaboratoriosComponent;
  let fixture: ComponentFixture<ControllaboratoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControllaboratoriosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllaboratoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
