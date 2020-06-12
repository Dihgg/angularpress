import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlocksComponent } from './blocks.component';



@NgModule({
  declarations: [BlocksComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BlocksComponent
  ]
})
export class BlocksModule { }
