import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get('https://6318ef1a6b4c78d91b32d13b.mockapi.io/users');
  }
}
