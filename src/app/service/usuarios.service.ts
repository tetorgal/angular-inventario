import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "http://localhost:5000/api/user";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  addUser(User: any): Observable<User> {
    return this.http.post<User>(this.url, User);
  }

  editUser(User: any): Observable<User> {
    return this.http.patch<User>(this.url, User);
  }


  delete(id: string): Observable<User> {
    return this.http.delete<User>(this.url + "/" + id)
  }



}