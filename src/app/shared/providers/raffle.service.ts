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
    let raffle3 = new Raffle();
    let raffle4 = new Raffle();
    let raffle5 = new Raffle();
    let raffle6 = new Raffle();

    raffle1.name = "Apple Watch";
    raffle1.description = "Relógio inteligente da Apple";
    raffle1.participants = new Array<Participant>();
    for (let index = 0; index < 20; index++) {
      raffle1.participants.push(new Participant());
    }
    raffle1.product = new Product();
    raffle1.product.image = "https://i.ya-webdesign.com/images/apple-watch-png-3.png";
    raffle1.unitPrice = 5;
    raffle1.maximumParticipants = 20;
//
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
//
    raffle3.name = "Samsung S20";
    raffle3.description = "SmartPhone Samsung S20 Rosé & BlueSky";
    raffle3.participants = new Array<Participant>();
    for (let index = 0; index < 1500; index++) {
      raffle3.participants.push(new Participant());
    }
    raffle3.product = new Product();
    raffle3.product.image = "https://images.samsung.com/pt/smartphones/galaxy-s20/buy/carousel/mobile/1-2-hubble-x1-y2-pink-blue-family-img.jpg";
    raffle3.unitPrice = 10;
    raffle3.maximumParticipants = 1500;

    raffle4.name = "Smart Tv Samsung";
    raffle4.description = 'Smart Tv Samsung QLed 42"';
    raffle4.participants = new Array<Participant>();
    for (let index = 0; index < 100; index++) {
      raffle4.participants.push(new Participant());
    }
    raffle4.product = new Product();
    raffle4.product.image = "https://ya-webdesign.com/images600_/samsung-tv-png-3.png";
    raffle4.unitPrice = 5;
    raffle4.maximumParticipants = 100;


    raffle5.name = "Jogo de Panelas Tramontina";
    raffle5.description = 'Alumínio Vermelho 10 Peças';
    raffle5.participants = new Array<Participant>();
    for (let index = 0; index < 30; index++) {
      raffle5.participants.push(new Participant());
    }
    raffle5.product = new Product();
    raffle5.product.image = "https://a-static.mlcdn.com.br/618x463/jogo-de-panelas-tramontina-antiaderente-de-aluminio-vermelho-10-pecas-turim-20298-722/magazineluiza/144129900/665e33805a99ad6159e55e4a15ce13f2.jpg";
    raffle5.unitPrice = 4;
    raffle5.maximumParticipants = 30;


    raffle6.name = "iPhone XR";
    raffle6.description = 'iPhone XR 128 GB Vermelho';
    raffle6.participants = new Array<Participant>();
    for (let index = 0; index < 250; index++) {
      raffle6.participants.push(new Participant());
    }
    raffle6.product = new Product();
    raffle6.product.image = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xr-red-select-201809?wid=441&hei=529&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1551226038669";
    raffle6.unitPrice = 10;
    raffle6.maximumParticipants = 250;

    let raffles = new Array<Raffle>(raffle1, raffle2, raffle3, raffle4, raffle5, raffle6);

    return of(raffles);
  }
}

