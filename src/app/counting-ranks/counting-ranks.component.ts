import { Component } from '@angular/core';
import {CountingService} from "../services/counting.service";

@Component({
  selector: 'app-counting-ranks',
  templateUrl: './counting-ranks.component.html',
  styleUrls: ['./counting-ranks.component.scss']
})
export class CountingRanksComponent {
  constructor(public countingService: CountingService) {
  }

}
