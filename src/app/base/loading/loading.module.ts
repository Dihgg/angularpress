import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading.component';
import { IconsModule } from '../icons/icons.module';



@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [
    LoadingComponent
  ]
})
export class LoadingModule { }
