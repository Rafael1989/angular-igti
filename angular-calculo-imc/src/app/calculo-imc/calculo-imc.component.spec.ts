import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoImcComponent } from './calculo-imc.component';

describe('CalculoImcComponent', () => {
  let component: CalculoImcComponent;
  let fixture: ComponentFixture<CalculoImcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculoImcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculoImcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
