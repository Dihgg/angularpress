import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar.component';
import { FormsModule } from '@angular/forms';
import { FeatherModule } from 'angular-feather';

@NgModule({
  declarations: [SearchbarComponent],
  imports: [
    CommonModule,
    FormsModule,
    FeatherModule
  ],
  exports: [
    SearchbarComponent
  ]
})
export class SearchModule { }
