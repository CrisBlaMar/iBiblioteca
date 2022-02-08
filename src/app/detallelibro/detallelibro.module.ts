import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallelibroPageRoutingModule } from './detallelibro-routing.module';

import { DetallelibroPage } from './detallelibro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallelibroPageRoutingModule
  ],
  declarations: [DetallelibroPage]
})
export class DetallelibroPageModule {}
