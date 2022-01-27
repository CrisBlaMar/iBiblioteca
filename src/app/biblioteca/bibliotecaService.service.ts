import { Injectable } from '@angular/core';
import { Libros } from '../interfaces/libros.interfaces';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchLibro } from '../interfaces/libros.interfaces';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaServices {

    constructor( private httpClient: HttpClient,  ){}

    /** 
  <script src="https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&callback=mycallback"></script>

  
  search.json?q
  search.json?q=dog*/

    private urlApi: string = "http://openlibrary.org/api/search.json?q";
    public resul: Libros [] = [];

    
    obtenerLibros (libro : string){

        const params = new HttpParams()
              .set('limit', '10')
              .set('q', libro );
    
        //this.HttpClient.get<SearchGifsInterface>(`${this.urlBase}/search?api_key=${this.api_Key}&q=${query}&limit=10`)
        this.httpClient.get<SearchLibro>(this.urlApi , {params:params})
        .subscribe((resp)=>{
          console.log(resp);
          this.resul= resp.data;
        })
    }
    


}
