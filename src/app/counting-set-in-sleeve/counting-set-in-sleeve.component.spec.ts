import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountingSetInSleeveComponent } from './counting-set-in-sleeve.component';

describe('CountingSetInSleeveComponent', () => {
  let component: CountingSetInSleeveComponent;
  let fixture: ComponentFixture<CountingSetInSleeveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountingSetInSleeveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountingSetInSleeveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
