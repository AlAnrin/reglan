import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountingCircleComponent } from './counting-circle.component';

describe('CountingCircleComponent', () => {
  let component: CountingCircleComponent;
  let fixture: ComponentFixture<CountingCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountingCircleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountingCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
