import { Injectable } from '@angular/core';
import {Weapon} from "../weapon";

@Injectable({
  providedIn: 'root'
})
export class EditService {

  // Selected Weapon in the HTML
  selectedWeapon?: Weapon;
  editToggle: boolean = false;

  constructor() { }


  onSelect(weapon: Weapon): void {
    this.selectedWeapon = weapon;
  }


  toggleEditMenu(): void {
    if (!this.editToggle) {
      this.editToggle = true;
    } else if (this.editToggle) {
      this.editToggle = false;
    }
  }
}
