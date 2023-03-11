import { Injectable } from '@angular/core';
import { Weapon } from '../weapon';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public saveData(id: number, value: Weapon){
    localStorage.setItem(id.toString() , JSON.stringify(value));
  }

  public getData(id: number){
    return localStorage.getItem(id.toString());
  }

  public removeData(id: number){
    localStorage.removeItem(id.toString());
  }

  public clearData(){
    localStorage.clear();
  }
}
