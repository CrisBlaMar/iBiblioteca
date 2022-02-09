import { Component, OnInit } from '@angular/core';
import { BibliotecaServices } from './bibliotecaService.service';
import { Libro } from '../interfaces/libros.interfaces';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage {

  buscador = '';
  mostrar = false;
  libro: Libro [] = [];

  constructor(private biblioServices : BibliotecaServices) { }


//llamamos al método creado en el servicio y nos subcribimos a él 
 /**  obLibro(){
    this.biblioServices.obtenerLibros(this.buscador)
    .subscribe({
      next: res =>{
        this.libro = res.docs;
      }
    })
  }*/

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

 /**  ngOnInit() {
    this.obLibro();
  }*/

}
