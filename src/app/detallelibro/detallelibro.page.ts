import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BibliotecaServices } from '../biblioteca/bibliotecaService.service';
import { Libro, SearchLibros } from '../interfaces/libros.interfaces';

@Component({
  selector: 'app-detallelibro',
  templateUrl: './detallelibro.page.html',
  styleUrls: ['./detallelibro.page.scss'],
})
export class DetallelibroPage implements OnInit {

  constructor(private biblioServices : BibliotecaServices,
    private activeRoute: ActivatedRoute) { }

  libro : Libro;

  obtenerLibro(){
    this.biblioServices.obtenerdetallelibro(this.activeRoute.snapshot.params["isbn"])
    .subscribe({
      next: res =>{
        this.libro = res.docs[0];
      },
      error: err =>{
        console.log(err);
      }
    })
  }

  ngOnInit() {
  }

}
