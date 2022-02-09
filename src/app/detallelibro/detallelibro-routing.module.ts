import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallelibroPage } from './detallelibro.page';

const routes: Routes = [

  {
    path: 'isbn',
    component: DetallelibroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallelibroPageRoutingModule {}
