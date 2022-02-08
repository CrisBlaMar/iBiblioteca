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
  

    
    obtenerLibros (){
        const params = new HttpParams()
              .set('title', 'the+lord+of+the+rings' )
              .set('limit', '10');
  
        return this.httpClient.get<SearchLibros>(this.urlApi , {params:params})
        
    }

    obtenerdetallelibro(libro: String){
      return this.httpClient.get<Libro>(`${this.urlApiDetalleLibro}${libro}`);

    }
    


}
