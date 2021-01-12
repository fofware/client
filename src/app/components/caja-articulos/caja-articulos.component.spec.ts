import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaArticulosComponent } from './caja-articulos.component';

describe('CajaArticulosComponent', () => {
  let component: CajaArticulosComponent;
  let fixture: ComponentFixture<CajaArticulosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CajaArticulosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CajaArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
