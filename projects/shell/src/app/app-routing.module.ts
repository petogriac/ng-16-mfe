import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    // {
    //     path: 'flights',
    //     loadChildren: () => import('remote/Module').then(m => m.FlightsModuleModule)
    // },
    {
        path: 'flights',
        loadChildren: () => import('../../../remote/src/app/flights-module/flights-module.module').then(m => m.FlightsModuleModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
