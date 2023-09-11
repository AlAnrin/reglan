import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {SetinCountingService} from "../services/setinCounting.service";

@Component({
  selector: 'app-counting-set-in-sleeve',
  templateUrl: './counting-set-in-sleeve.component.html',
  styleUrls: ['./counting-set-in-sleeve.component.scss']
})
export class CountingSetInSleeveComponent {
  constructor(public countingService: SetinCountingService, private router: Router) {
  }
}
