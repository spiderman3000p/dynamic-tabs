import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Option1Component } from './components/option1/option1.component';
import { Option2Component } from './components/option2/option2.component';
import { Option3Component } from './components/option3/option3.component';
import { Option4Component } from './components/option4/option4.component';
import { Option5Component } from './components/option5/option5.component';
import { DynamicComponentService } from './services/dynamic-components.service';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { MyTabsComponent } from './components/my-tabs/my-tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    Option1Component,
    Option2Component,
    Option3Component,
    Option4Component,
    Option5Component,
    NavbarComponent,
    MyTabsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [DynamicComponentService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [
    Option1Component,
    Option2Component,
    Option3Component,
    Option4Component,
    Option5Component,
  ],
})
export class AppModule {}
