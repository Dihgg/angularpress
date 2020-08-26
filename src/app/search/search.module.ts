import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { BaseModule } from '../base/base.module';
import { BlocksModule } from '../blocks/blocks.module';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { CatCloudComponent } from './cat-cloud/cat-cloud.component';



@NgModule({
  declarations: [
    SearchComponent,
    CatCloudComponent
  ],
  imports: [
    CommonModule,
    BaseModule,
    BlocksModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
