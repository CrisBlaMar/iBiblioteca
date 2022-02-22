import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BibliotecaServices } from '../biblioteca/bibliotecaService.service';
import { Libro, SearchLibros } from '../interfaces/libros.interfaces';
import { LocalStorageServicesService } from '../biblioteca/local-storage-services.service';

@Component({
  selector: 'app-detallelibro',
  templateUrl: './detallelibro.page.html',
  styleUrls: ['./detallelibro.page.scss'],
})
export class DetallelibroPage implements OnInit {

  constructor(private biblioServices : BibliotecaServices,
    private activeRoute: ActivatedRoute, 
    private storageservice : LocalStorageServicesService) { }

  libro: Libro;
  //cuando no ha cargado la página 
  mostrar: boolean = false;

  favorito : boolean = false;
  librosFavoritos : Libro [] = [];

  mos : boolean  = false;

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


      this.storageservice.almacenarFav();



    }

    guardarFav (clave : string, valor : any){
      this.storageservice.guardarFavorito(clave, valor);
      this.favorito = true;
    }

    eliminarFav (clave : string){
      this.storageservice.eliminarFavorito(clave);
      this.favorito = false;
    }

    marcarComoFavorito (libro : Libro){
      this.storageservice.libroFav(libro.isbn[0])
      .then(
        (resp) =>{
          this.favorito= true;
        })
      .catch((error) =>{
        
      })
    }

    mostrarLibro (){
      this.librosFavoritos = this.storageservice._libros;
      this.mos = true;
      
    }

}
