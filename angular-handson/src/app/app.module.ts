import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DummyComponent } from './dummy/dummy.component';
import { Dummy2Component } from './dummy/dummy-2/dummy-2.component';


@NgModule({
  declarations: [ // all the components and directives go here
    AppComponent,
    HeaderComponent,
    DummyComponent,
    Dummy2Component
  ],
  imports: [ // all the third party modules go here
    BrowserModule
  ],
  providers: [], // all the services go here
  bootstrap: [AppComponent]
})
export class AppModule { }
