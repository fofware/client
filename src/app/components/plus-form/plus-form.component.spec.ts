import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusFormComponent } from './plus-form.component';

describe('PlusFormComponent', () => {
  let component: PlusFormComponent;
  let fixture: ComponentFixture<PlusFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlusFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlusFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
