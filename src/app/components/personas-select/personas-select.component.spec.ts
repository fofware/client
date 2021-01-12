import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasSelectComponent } from './personas-select.component';

describe('PersonasSelectComponent', () => {
  let component: PersonasSelectComponent;
  let fixture: ComponentFixture<PersonasSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonasSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonasSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
