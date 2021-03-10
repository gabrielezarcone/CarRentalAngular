import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfermaComponent } from './modal-conferma.component';

describe('ModalConfermaComponent', () => {
  let component: ModalConfermaComponent;
  let fixture: ComponentFixture<ModalConfermaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConfermaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConfermaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
