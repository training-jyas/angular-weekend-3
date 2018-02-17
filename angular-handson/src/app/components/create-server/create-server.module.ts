import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateServerComponent } from './create-server.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CreateServerComponent],
  exports: [CreateServerComponent]
})
export class CreateServerModule { }
