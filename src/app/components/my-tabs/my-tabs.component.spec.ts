import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTabsComponent } from './my-tabs.component';

describe('MyTabsComponent', () => {
  let component: MyTabsComponent;
  let fixture: ComponentFixture<MyTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
