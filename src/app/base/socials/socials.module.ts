import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialsComponent } from './socials.component';
import { IconsModule } from '../icons/icons.module';



@NgModule({
  declarations: [
    SocialsComponent
  ],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [
    SocialsComponent
  ]
})
export class SocialsModule { }
