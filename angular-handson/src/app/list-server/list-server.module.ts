import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListServerComponent } from './list-server.component';
import { ServerElementComponent } from './server-element/server-element.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListServerComponent, ServerElementComponent],
  exports: [ListServerComponent]
})
export class ListServerModule { }
