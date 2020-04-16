import { Partnership } from './../models/partnership';
import { Observable, of } from 'rxjs';
import { environment } from '@enviroments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartnershipService {

  constructor(private httpCliente: HttpClient) { }

  private readonly API_URL: string = environment.apiUrl;

  public getAll(): Observable<Array<Partnership>>{
    //forma correta de obter os parceiros está comentada até que seja possível puxar pela API
    //return this.httpCliente.get<Array<Partnership>>(`${this.API_URL}partnerships`);
    let partnership1 = new Partnership();

    partnership1.idPartnership = 1;
    partnership1.name = "Americanas";
    partnership1.description = "A maior rede de vendas do país";
    partnership1.image = "https://i.ya-webdesign.com/images/apple-watch-png-3.png";


    let partnerships = new Array<Partnership>(partnership1);

    return of(partnerships);
  }
}