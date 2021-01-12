import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorListasComponent } from './proveedor-listas.component';

describe('ProveedorListasComponent', () => {
  let component: ProveedorListasComponent;
  let fixture: ComponentFixture<ProveedorListasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProveedorListasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
