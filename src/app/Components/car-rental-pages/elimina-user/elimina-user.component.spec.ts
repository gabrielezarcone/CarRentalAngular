import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminaUserComponent } from './elimina-user.component';

describe('EliminaUserComponent', () => {
  let component: EliminaUserComponent;
  let fixture: ComponentFixture<EliminaUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminaUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
