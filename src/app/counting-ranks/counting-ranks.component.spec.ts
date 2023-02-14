import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountingRanksComponent } from './counting-ranks.component';

describe('CountingRanksComponent', () => {
  let component: CountingRanksComponent;
  let fixture: ComponentFixture<CountingRanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountingRanksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountingRanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
