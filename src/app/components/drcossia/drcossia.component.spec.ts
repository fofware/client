import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcossiaComponent } from './drcossia.component';

describe('DrcossiaComponent', () => {
  let component: DrcossiaComponent;
  let fixture: ComponentFixture<DrcossiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrcossiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcossiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
