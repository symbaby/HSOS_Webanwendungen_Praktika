import {Component, OnInit} from '@angular/core';
import {Weapon} from "../weapon";
import WeaponMockData from "../../assets/weapons.json";
import {HttpService} from "../Service/http.service";
import {LocalStorageService} from "../Service/local-storage.service";

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css']
})

export class WeaponsComponent implements OnInit {

  /*
  // Default  Array Entries for testing
  weaponList: Weapon[] = [
    {id: 0, name: "Longsword", damage: 13, weight: 3.0, price: 250, tier: "A"},
    {id: 1, name: "Broadsword", damage: 17, weight: 3.8, price: 320, tier: "B"},
    {id: 2, name: "Lucerne", damage: 65, weight: 17.8, price: 1092, tier: "C"},
    {id: 3, name: "Greataxe", damage: 92, weight: 28.4, price: 2124, tier: "C"},
    {id: 4, name: "Glaive", damage: 75, weight: 20.9, price: 1857, tier: "C"},
  ]
*/

  // Selected Weapon in the HTML
  selectedWeapon?: Weapon;
  id: number = 5;
  // Weapon that will be pushed to the weaponlist
  model: Weapon = {id: 0, name: "", damage: 0, weight: 0, price: 0, tier: ""}

  // toogleMenue
  addToggle: boolean = false;
  editToggle: boolean = false;

  constructor(private httpService: HttpService, private localStorageService: LocalStorageService) {
  }

  posts: any;
  // addedData: any;
  ngOnInit(): void {
    this.httpService.getPosts().subscribe(
      (response) => {
        this.posts = response;
        // Hier die Local Storage daten holen und in posts pushen
        this.retrieveAddedContent();
      }
    );
  }

  retrieveAddedContent(): void {

    /* Erster Ansatz
    for (let i = this.id; i < localStorage.length + this.id; i++) {
      let weapon: Weapon;
      weapon = JSON.parse(localStorage.getItem(i.toString()) || '{}');
      this.posts.push(weapon);
    }
    */

    Object.keys(localStorage).forEach((key) => {
      let weapon: Weapon;
      weapon = JSON.parse(localStorage.getItem(key) || '{}');
      this.posts.push(weapon);
    });
  }

  printLocalStorageToConsole(): void {
    Object.keys(localStorage).forEach(function (key) {
      console.log(localStorage.getItem(key));
    });
  }

  onSelect(weapon: Weapon): void {
    this.selectedWeapon = weapon;
  }

  toggleAddMenu(): void {
    if (!this.addToggle) {
      this.addToggle = true;
    } else if (this.addToggle) {
      this.addToggle = false;
    }
  }

  toggleEditMenu(): void {
    if (!this.editToggle) {
      this.editToggle = true;
    } else if (this.editToggle) {
      this.editToggle = false;
    }
  }

  addWeapon(weapon: Weapon): void {
    // this.weaponList.push(weapon);
    weapon.id = this.id;
    this.localStorageService.saveData(this.id, weapon);
    this.posts.push(weapon);
    this.printLocalStorageToConsole();
    this.id++;
    console.log(this.posts);
  }

  clearAddedWeapon(): void {
    this.model = {id: 0, name: "", damage: 0, weight: 0, price: 0, tier: ""};
  }

  resetTable(): void {
    // slice() is basically a clone() method that returns entries by value
    // this.weaponList = WeaponMockData assigns by reference, e.g. I can reset only once!
    this.posts = WeaponMockData.slice();
  }

  // Source: https://www.angularjswiki.com/angular/how-to-remove-an-element-from-array-in-angular-or-typescript/
  deleteEntry(toBeDeleted: Weapon): void {
    this.posts.forEach((value: Weapon, index: any) => {
      if (value == toBeDeleted) {
        this.posts.splice(index, 1); // Delete 1 element at position = index
        this.localStorageService.removeData(toBeDeleted.id);
      }
    })
  }

  clearLocalStorage(): void {
    this.localStorageService.clearData();
  }
}

