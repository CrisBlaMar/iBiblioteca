import { Component, OnInit } from '@angular/core';
import { BibliotecaServices } from './bibliotecaService.service';
import { Libro } from '../interfaces/libros.interfaces';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {

  constructor(private biblioServices : BibliotecaServices) { }

  libro: Libro [] = [];


//llamamos al método creado en el servicio y nos subcribimos a él 
  obLibro(){
    this.biblioServices.obtenerLibros()
    .subscribe({
      next: res =>{
        this.libro = res.docs;
      }
    })
  }

  ngOnInit() {
    this.obLibro();
  }

}
