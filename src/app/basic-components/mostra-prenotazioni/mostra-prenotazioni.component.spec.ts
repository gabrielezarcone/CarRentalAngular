import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostraPrenotazioniComponent } from './mostra-prenotazioni.component';

describe('MostraPrenotazioniComponent', () => {
  let component: MostraPrenotazioniComponent;
  let fixture: ComponentFixture<MostraPrenotazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostraPrenotazioniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostraPrenotazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
