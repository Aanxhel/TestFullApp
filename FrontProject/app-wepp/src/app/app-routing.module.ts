import { NgModule } from '@angular/core';
//import { CommonModule  } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [


  { path: 'login-view', loadChildren: () => import('./modules/components/login-view/login-view.module').then(m => m.LoginViewModule) },
  { path: 'homeview', loadChildren: () => import('./modules/components/home-view/home-view.module').then(m => m.HomeViewModule) },

  //se coloca siempre al finalr para encontrar el path home
  { path: '**', pathMatch: 'full', redirectTo: 'homeview' },
  { path: '', pathMatch: 'full', redirectTo: 'homeview' },  

];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }