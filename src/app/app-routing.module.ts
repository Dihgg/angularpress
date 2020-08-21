import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { PageComponent } from './page/page.component';
import { CategoryComponent } from './category/category.component';
import { TagComponent } from './tag/tag.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: ':page', component: PageComponent },
  { path: 'post/:slug', component: PostComponent },
  { path: 'categoria/:category', component: CategoryComponent },
  { path: 'tag/:tag', component: TagComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
