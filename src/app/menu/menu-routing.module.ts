import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPage } from './menu.page';
import { Tab2Page } from './tab2/tab2.page';
import { Tab1Page } from './tab1/tab1.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [{
      path: 'tab1',
      loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule),
      component: Tab1Page
    },
    {
      path: 'tab2',
      loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule),
      component: Tab2Page
    },
    {
      path: 'tab3',
      loadChildren: '',
    }
    ]
  },
  {
    path:'',
    redirectTo:'menu/tab1',
    pathMatch:'full'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
