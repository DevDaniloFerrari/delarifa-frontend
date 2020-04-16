import { Partnership } from '@shared/models';
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

  public getAll(): Observable<Array<Partnership>> {
    //forma correta de obter os parceiros está comentada até que seja possível puxar pela API
    //return this.httpCliente.get<Array<Partnership>>(`${this.API_URL}partnerships`);
    let partnership1 = new Partnership();
    let partnership2 = new Partnership();
    let partnership3 = new Partnership();
    let partnership4 = new Partnership();
    let partnership5 = new Partnership();
    let partnership6 = new Partnership();

    partnership1.idPartnership = 1;
    partnership1.name = "Americanas";
    partnership1.description = "A maior rede de vendas do país";
    partnership1.image = "https://pbs.twimg.com/profile_images/1207310445331329024/t1Q69r3l_400x400.jpg";

    partnership2.idPartnership = 2;
    partnership2.name = "Amazon";
    partnership2.description = "A maior rede de vendas do mundo";
    partnership2.image = "https://www.sunoresearch.com.br/wp-content/uploads/2019/09/amazon.png";

    partnership3.idPartnership = 3;
    partnership3.name = "Centauro";
    partnership3.description = "A maior rede de esportivos do país";
    partnership3.image = "https://iguatemi.com.br/patiohigienopolis/sites/patiohigienopolis/files/2018-04/Centauro%20s.png";

    partnership4.idPartnership = 4;
    partnership4.name = "The games";
    partnership4.description = "A maior rede de games do país";
    partnership4.image = "https://www.melhordocinema.com.br/media/image_bank/2017/12/the-games.jpg.800x0_q85_crop.jpg";

    partnership5.idPartnership = 5;
    partnership5.name = "Pichau";
    partnership5.description = "A maior rede de informatica do país";
    partnership5.image = "https://codigovalido.com.br/wp-content/uploads/2019/02/cupom-pichau.jpg";

    partnership6.idPartnership = 6;
    partnership6.name = "Extra";
    partnership6.description = "A maior rede de supermercados do país";
    partnership6.image = "https://pbs.twimg.com/profile_images/1201510933543174145/J4WQAOx5_400x400.jpg";

    let partnerships = new Array<Partnership>(
      partnership1,
      partnership2,
      partnership3,
      partnership4,
      partnership5,
      partnership6,
      );

    return of(partnerships);
  }
}