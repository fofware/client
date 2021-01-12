import { TestBed } from '@angular/core/testing';

import { ProveedoresArticulosService } from './proveedores-articulos.service';

describe('ProveedoresArticulosService', () => {
  let service: ProveedoresArticulosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProveedoresArticulosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
