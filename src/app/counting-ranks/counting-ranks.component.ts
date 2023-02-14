import {Component, OnDestroy} from '@angular/core';
import {CountingService} from "../services/counting.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-counting-ranks',
  templateUrl: './counting-ranks.component.html',
  styleUrls: ['./counting-ranks.component.scss']
})
export class CountingRanksComponent implements OnDestroy {
  sub;

  reglan: { name: string, checked: boolean }[] = [];

  constructor(public countingService: CountingService,
              private router: Router) {
    this.sub = this.countingService.countArray.subscribe(data => {
      if (!data) {
        this.reglan = [];
      }
      else {
        for (let i = 0; i < this.countingService.reglanArrayArm.length; i++) {
          this.reglan[i] = {
            name: `Ряд ${i + 1}. ${this.countingService.reglanArrayArm[i]} |  ${this.countingService.reglanArrayBody[i]}`,
            checked: false
          };
        }
      }
    });
  }

  navigateToCircle(): void {
    this.router.navigate(['circle']);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
