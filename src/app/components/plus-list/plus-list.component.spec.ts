import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusListComponent } from './plus-list.component';

describe('PlusListComponent', () => {
  let component: PlusListComponent;
  let fixture: ComponentFixture<PlusListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlusListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
