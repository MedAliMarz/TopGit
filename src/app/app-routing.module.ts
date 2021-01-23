import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommitDetailsComponent } from './components/commit-details/commit-details.component';
import { LandingComponent } from './page/landing/landing.component';

const routes: Routes = [

  {
    path:'landing',
    component: LandingComponent,
  },
  {
    path:'commit/:id',
    component:CommitDetailsComponent
  },
  {
    path:'',
    redirectTo:'landing',
    pathMatch:'full'
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
