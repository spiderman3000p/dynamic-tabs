import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Option4Component } from './option4.component';

describe('Option4Component', () => {
  let component: Option4Component;
  let fixture: ComponentFixture<Option4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Option4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Option4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
