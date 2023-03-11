import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url = "http://localhost:4200/assets/weapons.json";

  constructor(private http: HttpClient) {
  }

  public getPosts() {
    return this.http.get(this.url);

  }
}
