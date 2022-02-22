import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { BibliotecaPageRoutingModule } from './biblioteca-routing.module';
import { BibliotecaPage } from './biblioteca.page';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { RouteReuseStrategy } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BibliotecaPageRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [
    BarcodeScanner,{
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    }
  ],
  exports: [
    
  ],
  declarations: [BibliotecaPage]
})
export class BibliotecaPageModule {}
