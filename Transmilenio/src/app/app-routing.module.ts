import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteViewComponent } from './route/route-view/route-view.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/route/view' },
  { path: 'route/view', component: RouteViewComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
