import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuLinkComponent } from './menu-link/menu-link.component';
import { IconsModule } from '../icons/icons.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SocialsModule } from '../socials/socials.module';



@NgModule({
  declarations: [
    MenuComponent,
    MenuLinkComponent
  ],
  imports: [
    CommonModule,
    IconsModule,
    AppRoutingModule,
    SocialsModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
