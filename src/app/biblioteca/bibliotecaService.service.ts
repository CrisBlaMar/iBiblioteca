import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchLibros, Libro } from '../interfaces/libros.interfaces';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaServices {

    constructor( private httpClient: HttpClient,  ){}

    
    private urlApi: string = "http://openlibrary.org/search.json";
    private urlApiDetalleLibro : string = "http://openlibrary.org/search.json?isbn="
    libros: Libro [] = [];

    
    obtenerLibros (buscador){
        const params : HttpParams = new HttpParams()
              .set('title', buscador)
              .set('limit', '10');
        let url = `${this.urlApi}`
        return this.httpClient.get<SearchLibros>(url , {params:params})
        
    }

    obtenerdetallelibro(libro: String){
      return this.httpClient.get<SearchLibros>(`${this.urlApiDetalleLibro}${libro}`);

    }
    


}
