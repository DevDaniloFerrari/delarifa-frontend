import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@enviroments/environment';
import { Observable } from 'rxjs';
import { Authenticate, User } from '@shared/models';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private httpClient: HttpClient) { }

  private readonly API_URL: string = environment.apiUrl;

  public authenticate(authenticate: Authenticate): Observable<User> {
    return this.httpClient.post<User>(`${this.API_URL}authenticates/login`, authenticate);
  }

  public register(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.API_URL}authenticates/register`, user);
  }

  public logout(token: string) {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    });
    return this.httpClient.post(`${this.API_URL}authenticates/logout`, { headers: headers });
  }
}


