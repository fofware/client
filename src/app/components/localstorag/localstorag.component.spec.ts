import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalstoragComponent } from './localstorag.component';

describe('LocalstoragComponent', () => {
  let component: LocalstoragComponent;
  let fixture: ComponentFixture<LocalstoragComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalstoragComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalstoragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
