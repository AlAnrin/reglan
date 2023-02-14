import { Component } from '@angular/core';
import {CountingService} from "../services/counting.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-counting-circle',
  templateUrl: './counting-circle.component.html',
  styleUrls: ['./counting-circle.component.scss']
})
export class CountingCircleComponent {
  constructor(public countingService: CountingService, private router: Router) {
  }

  navigateToRanks(): void {
    this.router.navigate(['ranks']);
  }
}
