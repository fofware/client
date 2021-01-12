import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaClientesComponent } from './caja-clientes.component';

describe('CajaClientesComponent', () => {
  let component: CajaClientesComponent;
  let fixture: ComponentFixture<CajaClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CajaClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CajaClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
