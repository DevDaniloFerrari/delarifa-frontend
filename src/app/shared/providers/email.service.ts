import { Observable } from 'rxjs';
import { environment } from '@enviroments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email } from '@shared/models';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private httpCliente: HttpClient) { }

  private readonly API_URL: string = environment.apiUrl;

  public send(email: Email): Observable<Email> {
    return this.httpCliente.post<Email>(`${this.API_URL}emails`, email);
  }
}
