import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Option3Component } from './option3.component';

describe('Option3Component', () => {
  let component: Option3Component;
  let fixture: ComponentFixture<Option3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Option3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Option3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
