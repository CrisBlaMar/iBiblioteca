import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallelibroPageRoutingModule } from './detallelibro-routing.module';

import { DetallelibroPage } from './detallelibro.page';
import { LocalStorageServicesService } from '../biblioteca/local-storage-services.service';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallelibroPageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [DetallelibroPage],
  providers: [
    LocalStorageServicesService
  ]
})
export class DetallelibroPageModule {}
