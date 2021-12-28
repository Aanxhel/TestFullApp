import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  

  { path: 'notfound', loadChildren: () => import('./modules/components/not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: 'footer', loadChildren: () => import('./modules/components/footer/footer.module').then(m => m.FooterModule) },
  { path: 'header', loadChildren: () => import('./modules/components/header/header.module').then(m => m.HeaderModule) },

  //se coloca siempre al finalr para encontrar el path home
  { path: '**', pathMatch: 'full', redirectTo: 'notfound' },
  { path: '', pathMatch: 'full', redirectTo: 'notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
