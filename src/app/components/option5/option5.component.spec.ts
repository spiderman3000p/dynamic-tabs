import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Option5Component } from './option5.component';

describe('Option5Component', () => {
  let component: Option5Component;
  let fixture: ComponentFixture<Option5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Option5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Option5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
