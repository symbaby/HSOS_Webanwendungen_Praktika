import { Injectable } from '@angular/core';
import {Weapon} from "../weapon";
import {HttpService} from "./http.service";
import {LocalStorageService} from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private httpService: HttpService, private localStorageService: LocalStorageService) { }


  // Source: https://www.angularjswiki.com/angular/how-to-remove-an-element-from-array-in-angular-or-typescript/
  deleteEntry(toBeDeleted: Weapon): void {
    this.httpService.posts.forEach((value: Weapon, index: any) => {
      if (value == toBeDeleted) {
        this.httpService.posts.splice(index, 1); // Delete 1 element at position = index
        this.localStorageService.removeData(toBeDeleted.id);
      }
    })
  }
}
