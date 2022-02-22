import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage-angular';
import { Libro } from '../interfaces/libros.interfaces';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageServicesService {

  constructor(private storage :Storage) {
    this.init();
   }

  _libros : Libro [] = [];


  async init(){
    const storage = await this.storage.create();
  }

  async guardarFavorito (clave : string, value : any){
    return await this.storage.set(clave, value);
  }

  async eliminarFavorito (clave: string){
    return await this.storage.remove(clave);
  }

  async libroFav (clave: string){
    return await this.storage.get(clave);
  }

  async almacenarFav (){

    this.storage.forEach((key, value) => {
      this._libros.push(key);
    });
    return this._libros;
  }

  getLibros (){
    return [...this._libros];
  }


  


}

