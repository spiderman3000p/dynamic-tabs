import { AfterViewInit, Component, Injector, ViewChild } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import {
  MenuItem,
  MyTabsComponent,
} from './components/my-tabs/my-tabs.component';
import { menuOptions } from './utils/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  menuOptions: MenuItem[] = menuOptions;
  @ViewChild(MyTabsComponent, { static: false })
  myTabsComponent!: MyTabsComponent;
  constructor(private injector: Injector) {}

  ngAfterViewInit(): void {
    this.registerComponents();
  }

  registerComponents() {
    this.menuOptions.forEach((option) => {
      if (option.componentType && option.tag) {
        const TabElement = createCustomElement(option.componentType, {
          injector: this.injector,
        });
        customElements.define(option.tag, TabElement);
      }
    });
  }

  onClickMenuOption(option: MenuItem) {
    this.myTabsComponent.addTab(option);
  }
}
