import {Component, Inject, OnDestroy} from '@angular/core';
import {CountingService} from "../services/counting.service";
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {DialogOverviewExampleDialog} from "./save-dialog";

@Component({
  selector: 'app-counting-ranks',
  templateUrl: './counting-ranks.component.html',
  styleUrls: ['./counting-ranks.component.scss']
})
export class CountingRanksComponent implements OnDestroy {
  sub;

  reglan: { name: string, checked: boolean }[] = [];

  constructor(public countingService: CountingService,
              public dialog: MatDialog,
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

  downloadRanks(): void {
    const link = document.createElement("a");

    const content = this.reglan.filter(x => !x.checked).map(x => x.name).join('\n');

    const file = new Blob([content], { type: 'text/plain' });

    link.href = URL.createObjectURL(file);

    link.download = "ranks.txt";

    link.click();
    URL.revokeObjectURL(link.href);
  }

  saveRanks(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '60vw'
    });

    dialogRef.afterClosed().subscribe(result => {
      const savedProjects = localStorage.getItem('reglan_ranks!') ? localStorage.getItem('reglan_ranks!')?.split(';') : [];
      // @ts-ignore
      savedProjects.push(result);
      // @ts-ignore
      localStorage.setItem('reglan_ranks!', savedProjects.join(';'));
      localStorage.setItem(result, JSON.stringify(this.reglan));
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
