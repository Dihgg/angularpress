import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [LogoComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    LogoComponent
  ]
})
export class LogoModule { }
