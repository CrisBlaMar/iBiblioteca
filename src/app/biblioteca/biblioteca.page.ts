import { Component, OnInit } from '@angular/core';
import { Libros } from '../interfaces/libros.interfaces';
import { BibliotecaServices } from './bibliotecaService.service';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {

  
  

  constructor(private biblioServices : BibliotecaServices) { }

  get mostrarLibro(){
    return this.biblioServices.resul;
  }

  ngOnInit() {
  }

}
