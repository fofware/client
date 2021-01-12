import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorArticulosComponent } from './proveedor-articulos.component';

describe('ProveedorArticulosComponent', () => {
  let component: ProveedorArticulosComponent;
  let fixture: ComponentFixture<ProveedorArticulosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProveedorArticulosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
