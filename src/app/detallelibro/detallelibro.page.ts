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

  libro: Libro;
  //cuando no ha cargado la página 
  mostrar: boolean = false;

  

  ngOnInit() {
      const isbn : string = this.activeRoute.snapshot.params['isbn'];
      this.biblioServices.obtenerdetallelibro(isbn)
      .subscribe({
        next: resp =>{
          this.libro = resp.docs[0];
          //cuando ya ha cargado la página, nos lo pone a true y nos lo muestra
          this.mostrar = true;
        },
        error: err =>{
          console.log(err);
        }
      })
    }
}
