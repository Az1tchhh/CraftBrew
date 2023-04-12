import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistratinComponent } from './registratin.component';

describe('RegistratinComponent', () => {
  let component: RegistratinComponent;
  let fixture: ComponentFixture<RegistratinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistratinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistratinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
