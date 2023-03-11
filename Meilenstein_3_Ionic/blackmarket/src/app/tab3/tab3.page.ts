import {Component} from '@angular/core';
import {LocalStorageService} from "../services/local-storage.service";
import {AlertController} from "@ionic/angular";


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  constructor(private localStorageService: LocalStorageService, private alertController: AlertController) {
  }


  clearLocalStorage(): void {
    this.presentAlert().then(r => this.localStorageService.clearData());

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      subHeader: 'Local Storage has been cleared',
      buttons: ['OK'],
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

}
