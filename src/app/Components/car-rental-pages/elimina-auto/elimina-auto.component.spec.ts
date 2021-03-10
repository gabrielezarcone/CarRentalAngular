import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminaAutoComponent } from './elimina-auto.component';

describe('EliminaAutoComponent', () => {
  let component: EliminaAutoComponent;
  let fixture: ComponentFixture<EliminaAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminaAutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminaAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
