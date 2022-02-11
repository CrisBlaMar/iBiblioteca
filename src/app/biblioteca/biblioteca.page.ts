import { Component, OnInit } from '@angular/core';
import { BibliotecaServices } from './bibliotecaService.service';
import { Libro } from '../interfaces/libros.interfaces';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage {

  buscador = '';
  mostrar = false;
  libro: Libro [] = [];

  encodedData: any;
  scannedBarCode: {};
  barcodeScannerOptions: BarcodeScannerOptions;

  constructor(private biblioServices : BibliotecaServices, private scanner : BarcodeScanner, private router : Router) { 
    
    this.encodedData = "Programming isn't about what you know";
      
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
  }

  buscar (event){
    const resul: string =  event.detail.value;
    if(resul.length === 0){
      this.mostrar = false;
      this.libro = [];
      return;
    }
    this.mostrar = false;

    this.biblioServices.obtenerLibros( resul )
    .subscribe(resp=>{
      this.libro = resp.docs;
      this.mostrar = true;
    })
  }


  barcode(){
    this.scanner.scan()
    .then(res=>{
      this.scannedBarCode = res;
      this.router.navigate(['/detallelibro', res.text])
    }).catch(err=>{
      alert(err);
    })

  }

 /**  ngOnInit() {
    this.obLibro();
  }*/

}
