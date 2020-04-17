import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Viacep } from '@shared/models';
import { environment } from '@enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {

  constructor(private httpClient: HttpClient) { }

  private readonly API_URL: string = environment.viaCepUrl;

  public getViacep(cep: string): Observable<Viacep> {
    return this.httpClient.get<Viacep>(`${this.API_URL}${cep}/json`);
  }
}
