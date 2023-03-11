import {Injectable} from '@angular/core';
import {Timestamp} from "firebase/firestore"
import {
  Firestore,
  collection,
  collectionData,
  query,
  orderBy,
  addDoc,
  serverTimestamp,
  where
} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  username: string = this.getName();


  // History of Chat messages
  history: Observable<any[]>;

  constructor(public firestore: Firestore) {
    // Get Collection from room_0
    const coll = collection(firestore, 'room_1');
    const q = query(coll, orderBy("timestamp", 'asc'));
    this.history = collectionData(q);

    let storedName = localStorage.getItem('username');
    if (storedName != null) {
      this.username = storedName;
    } else {
      this.username = "default Name";
    }
  }

  getChats() {
    return this.history;
  }

  getUsername() {
    return this.username;
  }

  submitMessage(chatMessage: string) {
    const docRef = addDoc(collection(this.firestore, "room_1"), {
      author: this.username,
      text: chatMessage,
      timestamp: serverTimestamp()
    });

  }

  async setName(name: string) {

    /*
    let free: boolean = true;
    let coll = collection(this.firestore, 'room_1');
    let q = query(coll, orderBy("timestamp", 'asc'));
    let chats = collectionData(q);
    chats.subscribe((data) => {
      data.forEach((chat) => {
          if (chat['author'] == name) {
            free = false;
          }
        }
      );
    });

    if (free) {
      this.username = name;
      console.log(this.username + " angekommen");
      localStorage.setItem('name', name);
    } else {
      console.log(name + " gibt es schon");
    }*/

    let free: boolean = true;
    let coll = collection(this.firestore, 'room_1');
    let q = query(coll, orderBy("timestamp", 'asc'));
    let chats = collectionData(q);

    // iterate throuh chats. if name is already in use, set free to false else set it to true
    chats.forEach((data) => {
      data.forEach((chat) => {
          if (chat['author'] == name) {
            free = false;
          }
        }
      );
    });

    if (free) {
      this.username = name;
      console.log(this.username + " angekommen");
      localStorage.setItem('name', name);
    } else {
      console.log(name + " gibt es schon");
    }


  }

  getName(): string {
    let storedName = localStorage.getItem('username');
    if (storedName != null) {
      this.username = storedName;
      return this.username;
    } else {
      return "No Name";
    }
  }

}

