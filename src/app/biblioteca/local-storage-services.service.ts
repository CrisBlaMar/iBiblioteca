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

  libros : Libro [] = [];


  async init(){
    const storage = await this.storage.create();
  }

  async guardarFavorito (clave : string, value : any){
    return await this.storage.set(clave, value);
  }

  async borrarStorage (){
   await this.storage.clear();
  }

  async libroFav (clave: string){
    return await this.storage.get(clave);
  }
}

