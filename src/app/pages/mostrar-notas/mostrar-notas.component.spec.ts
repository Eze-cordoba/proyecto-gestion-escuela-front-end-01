import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarNotasComponent } from './mostrar-notas.component';

describe('MostrarNotasComponent', () => {
  let component: MostrarNotasComponent;
  let fixture: ComponentFixture<MostrarNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarNotasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
