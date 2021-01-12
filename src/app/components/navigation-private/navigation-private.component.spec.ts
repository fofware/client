import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationPrivateComponent } from './navigation-private.component';

describe('NavigationPrivateComponent', () => {
  let component: NavigationPrivateComponent;
  let fixture: ComponentFixture<NavigationPrivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationPrivateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
