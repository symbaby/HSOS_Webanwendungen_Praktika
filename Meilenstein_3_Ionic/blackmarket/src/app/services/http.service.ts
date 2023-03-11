import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Weapon} from "../weapon";


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url = "http://localhost:8100/assets/weapons.json";


  posts: any;

  constructor(private http: HttpClient) {
  }

  public getPosts() {
    return this.http.get(this.url);
  }
}
