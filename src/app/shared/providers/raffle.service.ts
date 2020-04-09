import { Observable, of } from 'rxjs';
import { environment } from '@enviroments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Raffle, Participant, Product } from '@shared/models';

@Injectable({
  providedIn: 'root'
})
export class RaffleService {

  constructor(private httpCliente: HttpClient) { }

  private readonly API_URL: string = environment.apiUrl;

  public getAll(): Observable<Array<Raffle>>{
    //forma correta de obter as rifas está comentada até que seja possível puxar pela API
    //return this.httpCliente.get<Array<Raffle>>(`${this.API_URL}raffles`);
    let raffle1 = new Raffle();
    let raffle2 = new Raffle();

    raffle1.name = "Apple Watch";
    raffle1.description = "Relógio inteligênte da Apple";
    raffle1.participants = new Array<Participant>();
    for (let index = 0; index < 20; index++) {
      raffle1.participants.push(new Participant());
    }
    raffle1.product = new Product();
    raffle1.product.image = "https://i.ya-webdesign.com/images/apple-watch-png-3.png";
    raffle1.unitPrice = 5;
    raffle1.maximumParticipants = 20;

    raffle2.name = "MacBook";
    raffle2.description = "Notebook Apple | Intel Core I5 1.4 GHZ | 8GB | 256 GB SSD";
    raffle2.participants = new Array<Participant>();
    for (let index = 0; index < 500; index++) {
      raffle2.participants.push(new Participant());
    }
    raffle2.product = new Product();
    raffle2.product.image = "https://i.ytimg.com/vi/V7pce4nrR4c/maxresdefault.jpg";
    raffle2.unitPrice = 10;
    raffle2.maximumParticipants = 500;

    let raffles = new Array<Raffle>(raffle1, raffle2);

    return of(raffles);
  }
}

