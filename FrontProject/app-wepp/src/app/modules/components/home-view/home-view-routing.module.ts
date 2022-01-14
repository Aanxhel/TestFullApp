import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './home-view.component';

const routes: Routes = [{
  path: '', component: HomeViewComponent,

  children: [

    { path: 'example', loadChildren: () => import('./example/example.module').then(m => m.ExampleModule) },
    { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
    { path: '**', pathMatch: 'full', redirectTo: 'customer' },

  ],

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeViewRoutingModule { }
