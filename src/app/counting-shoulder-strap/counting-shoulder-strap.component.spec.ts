import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountingShoulderStrapComponent } from './counting-shoulder-strap.component';

describe('CountingShoulderStrapComponent', () => {
  let component: CountingShoulderStrapComponent;
  let fixture: ComponentFixture<CountingShoulderStrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountingShoulderStrapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountingShoulderStrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
