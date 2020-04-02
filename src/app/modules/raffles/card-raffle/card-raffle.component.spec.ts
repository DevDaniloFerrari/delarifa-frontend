import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRaffleComponent } from './card-raffle.component';

describe('CardRaffleComponent', () => {
  let component: CardRaffleComponent;
  let fixture: ComponentFixture<CardRaffleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardRaffleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRaffleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
