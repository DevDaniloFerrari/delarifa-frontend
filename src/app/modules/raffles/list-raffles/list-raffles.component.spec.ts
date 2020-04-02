import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRafflesComponent } from './list-raffles.component';

describe('ListRafflesComponent', () => {
  let component: ListRafflesComponent;
  let fixture: ComponentFixture<ListRafflesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRafflesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRafflesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
