import { Address } from './../models/address';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@enviroments/environment';
import { Observable, of } from 'rxjs';
import { Authentication, User, Gender, MaritalStatus } from '@shared/models';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private httpClient: HttpClient) { }

  private readonly API_URL: string = environment.apiUrl;


  public authenticate(authentication: Authentication): Observable<User> {
    return this.httpClient.post<User>(`${this.API_URL}login`, authentication);
  }

  public register(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.API_URL}register`, user);
  }

  public logout(token: string) {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + '"' + token + '"',
      'Content-Type': 'application/json'
    });
    return this.httpClient.post(`${this.API_URL}logout`, { headers: headers });
  }

  public getProfile(token: string): Observable<User> {
    //return this.httpClient.get<User>(`${this.API_URL}profile`);

    let profile = new User(
      'Lucas Oliveira',
      new Date(),
      Gender.Male,
      'lucasoliveira.si@outlook.com',
      '783615gdim*3',
      MaritalStatus.Single,
      new Address(
        "Rua Coronel frias",
        "281",
        "SP",
        "São Paulo",
        "Brasil",
        "Vila Monumento",
        "01552010"
      ),
      '20629185',
      '983656638'
    );

    return of(profile);
  }

}


