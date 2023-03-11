import { Injectable } from '@angular/core';
import {Weapon} from "../weapon";
import {LocalStorageService} from "./local-storage.service";
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class AddService {



  constructor(private localStorageService: LocalStorageService, private httpService: HttpService) { }

  // Weapon that will be pushed to the weaponlist
  model: Weapon = {id: 0, name: "", damage: 0, weight: 0, price: 0, tier: ""}

  // toogleMenue
  addToggle: boolean = false;

  addWeapon(weapon: Weapon, id: number): void {
    weapon.id = id;
    this.localStorageService.saveData(id, weapon);
    this.httpService.posts.push(weapon);
    console.log(id);
  }

  clearAddedWeapon(): void {
    this.model = {id: 0, name: "", damage: 0, weight: 0, price: 0, tier: ""};
  }

  toggleAddMenu(): void {
    if (!this.addToggle) {
      this.addToggle = true;
    } else if (this.addToggle) {
      this.addToggle = false;
    }
  }



}
