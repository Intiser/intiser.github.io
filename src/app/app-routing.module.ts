import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { BlogComponent } from './blog/blog.component';
import { FamilyTreeComponent } from './family-tree/family-tree.component';

const routes: Routes = [
  { path:  '', component:  MainComponent},
  { path:  'blog', component:  BlogComponent},
  { path:  'familytree', component:  FamilyTreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
