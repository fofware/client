import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaKartComponent } from './caja-kart.component';

describe('CajaKartComponent', () => {
  let component: CajaKartComponent;
  let fixture: ComponentFixture<CajaKartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CajaKartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CajaKartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
