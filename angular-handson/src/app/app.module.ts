import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { CreateServerModule } from './components/create-server/create-server.module';
import { ListServerModule } from './components/list-server/list-server.module';
import { DirectivesComponent } from './directives/directives.component';
import { ComponentsComponent } from './components/components.component';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { PipesComponent } from './pipes/pipes.component';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  declarations: [ // all the components and directives go here
    AppComponent, DirectivesComponent, ComponentsComponent, BasicHighlightDirective, BetterHighlightDirective, PipesComponent, TruncatePipe
  ],
  imports: [ // all the third party modules go here
    BrowserModule,
    FormsModule,
    HeaderModule,
    CreateServerModule,
    ListServerModule
  ],
  providers: [], // all the services go here
  bootstrap: [AppComponent]
})
export class AppModule { }
