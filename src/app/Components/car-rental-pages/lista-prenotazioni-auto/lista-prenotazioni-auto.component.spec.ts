import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPrenotazioniAutoComponent } from './lista-prenotazioni-auto.component';

describe('ListaPrenotazioniAutoComponent', () => {
  let component: ListaPrenotazioniAutoComponent;
  let fixture: ComponentFixture<ListaPrenotazioniAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPrenotazioniAutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPrenotazioniAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
