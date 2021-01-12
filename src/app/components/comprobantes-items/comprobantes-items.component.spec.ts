import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprobantesItemsComponent } from './comprobantes-items.component';

describe('ComprobantesItemsComponent', () => {
  let component: ComprobantesItemsComponent;
  let fixture: ComponentFixture<ComprobantesItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprobantesItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprobantesItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
