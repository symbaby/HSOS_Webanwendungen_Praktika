import {Component} from '@angular/core';
import {ChatServiceService} from "../service/chat-service.service";


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  name: string =  this.chatService.getName();
  sendMessage: string = "";
  usernameEntered: boolean = false;

  constructor(private chatService: ChatServiceService) {

  }


  getChats() {
    return this.chatService.getChats();
  }


  async submitMessage(){
    //  console.log(this.sendMessage)
    if(this.sendMessage != ""){
      await this.chatService.submitMessage(this.sendMessage);
    }
  }




}
