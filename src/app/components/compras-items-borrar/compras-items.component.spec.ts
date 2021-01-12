import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasItemsComponent } from './compras-items.component';

describe('ComprasItemsComponent', () => {
  let component: ComprasItemsComponent;
  let fixture: ComponentFixture<ComprasItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprasItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprasItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
