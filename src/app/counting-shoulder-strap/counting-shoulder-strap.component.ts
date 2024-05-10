import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {StrapShoulderService} from "../services/strapShoulder.service";

@Component({
  selector: 'app-counting-shoulder-strap',
  templateUrl: './counting-shoulder-strap.component.html',
  styleUrls: ['./counting-shoulder-strap.component.scss']
})
export class CountingShoulderStrapComponent {
  constructor(public countingService: StrapShoulderService, private router: Router) {
  }
}
