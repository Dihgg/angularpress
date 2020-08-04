import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar.component';
import { IconsModule } from '../icons/icons.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SearchbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IconsModule,
  ],
  exports: [
    SearchbarComponent
  ]
})
export class SearchBarModule { }
