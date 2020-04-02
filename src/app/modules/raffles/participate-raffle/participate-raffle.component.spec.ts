import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipateRaffleComponent } from './participate-raffle.component';

describe('ParticipateRaffleComponent', () => {
  let component: ParticipateRaffleComponent;
  let fixture: ComponentFixture<ParticipateRaffleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipateRaffleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipateRaffleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
