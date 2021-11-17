import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlespecialidadesComponent } from './controlespecialidades.component';

describe('ControlespecialidadesComponent', () => {
  let component: ControlespecialidadesComponent;
  let fixture: ComponentFixture<ControlespecialidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlespecialidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlespecialidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
