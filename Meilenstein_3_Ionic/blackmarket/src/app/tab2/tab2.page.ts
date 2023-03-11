import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from "../services/local-storage.service";
import {HttpService} from "../services/http.service";
import {Weapon} from "../weapon";
import WeaponMockData from "../../assets/weapons.json";
import {AddService} from "../services/add.service";
import {DeleteService} from "../services/delete.service";
import {EditService} from "../services/edit.service";

import {ViewChild} from '@angular/core';
import {IonModal} from '@ionic/angular';
import {OverlayEventDetail} from '@ionic/core/components';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit {

  isModalOpenAdd = false;
  isModalOpenEdit = false;

  setOpenAdd(isOpen: boolean) {
    this.isModalOpenAdd = isOpen;
  }

  setOpenEdit(isOpen: boolean) {
    this.isModalOpenEdit = isOpen;
  }


  id: number = 5;

  constructor(public httpService: HttpService, private localStorageService: LocalStorageService, public addService: AddService, private deleteService: DeleteService, public editService: EditService) {
  }

  // addedData: any;
  ngOnInit(): void {
    this.httpService.getPosts().subscribe(
      (response) => {
        this.httpService.posts = response;
        this.retrieveAddedContent();
      }
    );
  }

  retrieveAddedContent(): void {
    let maxvalue: number = 0;
    let test: number = 0;
    Object.keys(localStorage).forEach((key) => {
      console.log("Retrieving " + key);
      let weapon: Weapon;
      weapon = JSON.parse(localStorage.getItem(key) || '{}');
      this.httpService.posts.push(weapon);
      test = parseInt(key);
      if (test > maxvalue) {
        maxvalue = test;
        this.id = test;
      }
    });
  }

  printLocalStorageToConsole(): void {
    Object.keys(localStorage).forEach(function (key) {
      console.log(localStorage.getItem(key));
    });
  }

  addWeapon(weapon: Weapon): void {
    this.id++;
    this.addService.addWeapon(weapon, this.id);
  }

  clearAddedWeapon(): void {
    this.addService.clearAddedWeapon();
  }

  resetTable(): void {
    // slice() is basically a clone() method that returns entries by value
    // this.weaponList = WeaponMockData assigns by reference, e.g. I can reset only once!
    this.httpService.posts = WeaponMockData.slice();
  }

  // Source: https://www.angularjswiki.com/angular/how-to-remove-an-element-from-array-in-angular-or-typescript/
  deleteEntry(toBeDeleted: Weapon): void {
    this.deleteService.deleteEntry(toBeDeleted);
  }

  clearLocalStorage(): void {
    this.localStorageService.clearData();
  }
}
