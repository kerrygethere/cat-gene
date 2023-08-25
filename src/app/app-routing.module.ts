import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatComponent } from './cat/cat.component';
import { LitterComponent } from './litter/litter.component';

const routes: Routes = [
  { path: 'litter', component: LitterComponent },
  { path: '', pathMatch: 'full', component: CatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
