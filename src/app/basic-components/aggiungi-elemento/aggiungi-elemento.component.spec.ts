import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiElementoComponent } from './aggiungi-elemento.component';

describe('AggiungiElementoComponent', () => {
  let component: AggiungiElementoComponent;
  let fixture: ComponentFixture<AggiungiElementoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggiungiElementoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggiungiElementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
