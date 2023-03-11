import {Component} from '@angular/core';
import {ChatServiceService} from "../service/chat-service.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  nameTest: string = "";


  constructor(private chatService: ChatServiceService) {

  }


  async setName() {
    if (this.nameTest != "") {
      await this.chatService.setName(this.nameTest);
    }
  }


  getName() {
    return this.chatService.getName();
  }


}
