import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';

@NgModule({
  declarations: [ // all the components and directives go here
    AppComponent
  ],
  imports: [ // all the third party modules go here
    BrowserModule,
    FormsModule,
    HeaderModule
  ],
  providers: [], // all the services go here
  bootstrap: [AppComponent]
})
export class AppModule { }
