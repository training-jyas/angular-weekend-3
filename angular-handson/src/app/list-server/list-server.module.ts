import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListServerComponent } from './list-server.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListServerComponent],
  exports: [ListServerComponent]
})
export class ListServerModule { }
