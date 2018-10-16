import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessOrderFormComponent } from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProcessOrderFormComponent],
  exports: [
    ProcessOrderFormComponent
  ]
})
export class OrdersModule { }
