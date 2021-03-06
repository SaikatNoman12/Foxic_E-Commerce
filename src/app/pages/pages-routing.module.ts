import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:PagesComponent,
    children:[
      // {
      //   path:'',
      //   loadChildren:() => import('./home/home.module').then(m => m.HomeModule)
      // },
      {
        path:'',
        loadChildren:() => import('./product/product.module').then(m => m.ProductModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
