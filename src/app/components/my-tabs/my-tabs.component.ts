import {
  Component,
  ComponentRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Type,
} from '@angular/core';
import { DynamicComponentService } from 'src/app/services/dynamic-components.service';

export interface MenuItem {
  componentRef?: ComponentRef<any>;
  htmlId?: string;
  id: number;
  label: string;
  tag?: string;
  componentType?: Type<any>;
  children?: MenuItem[];
}

@Component({
  selector: 'app-my-tabs',
  templateUrl: './my-tabs.component.html',
  styleUrls: ['./my-tabs.component.scss'],
})
export class MyTabsComponent implements OnInit {
  @Input() currentTab?: MenuItem;
  @Output() currentTabChange: EventEmitter<MenuItem> = new EventEmitter();
  @Output() tabClosed: EventEmitter<MenuItem> = new EventEmitter();
  @Output() tabOpened: EventEmitter<MenuItem> = new EventEmitter();
  openedTabs: MenuItem[] = [];
  constructor(public dynamicComponentService: DynamicComponentService) {}

  ngOnInit(): void {}

  onChangeTab(tab: MenuItem) {
    console.log('on change tab', tab);
    this.currentTab = tab;
    this.currentTabChange.emit(tab);
  }

  onCloseTab(tab: MenuItem) {
    console.log('on close tab', tab);
    const isOpened = this.openedTabs.find((el) => el.id === tab.id);
    if (!isOpened) {
      return;
    }
    const tabIndex = this.openedTabs.findIndex((el) => el.id === tab.id);
    if (this.currentTab?.id == tab.id && this.openedTabs[tabIndex + 1]) {
      this.currentTab = this.openedTabs[tabIndex + 1];
      this.currentTabChange.emit(this.currentTab);
    } else if (this.currentTab?.id == tab.id && this.openedTabs[tabIndex - 1]) {
      this.currentTab = this.openedTabs[tabIndex - 1];
      this.currentTabChange.emit(this.currentTab);
    } else if (this.currentTab?.id == tab.id) {
      this.currentTab = undefined;
      this.currentTabChange.emit(this.currentTab);
    }
    this.dynamicComponentService.removeComponent(tab);
    this.openedTabs.splice(tabIndex, 1);
    this.tabClosed.emit(tab);
  }

  addTab(tab: MenuItem) {
    console.log('on add tab', tab);
    const isOpened = this.openedTabs.find((el) => el.id === tab.id);
    if (!isOpened) {
      this.openedTabs.push(tab);
      this.currentTab = tab;
      this.dynamicComponentService.addComponent(tab);
      this.tabOpened.emit(tab);
      this.currentTabChange.emit(tab);
    } else if (this.currentTab?.id !== tab.id) {
      this.currentTab = tab;
      this.currentTabChange.emit(tab);
    }
  }
}
