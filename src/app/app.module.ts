import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { PageComponent } from './page/page.component';
import { ArchiveComponent } from './archive/archive.component';
import { CategoryComponent } from './category/category.component';
import { TagComponent } from './tag/tag.component';
import { AuthorComponent } from './author/author.component';
import { BlocksModule } from './blocks/blocks.module';
import { BaseModule } from './base/base.module';
import { FormsModule } from '@angular/forms';
import { SearchModule } from './search/search.module';

@NgModule({
  declarations: [
    AppComponent,
    ArchiveComponent,
    AuthorComponent,
    CategoryComponent,
    HomeComponent,
    PageComponent,
    PostComponent,
    TagComponent
  ],
  imports: [
    AppRoutingModule,
    BaseModule,
    SearchModule,
    BlocksModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
