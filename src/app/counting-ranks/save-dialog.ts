import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'dialog-overview-example-dialog',
  template: `
    <div mat-dialog-content>
      <p>Назовите расчет рядов</p>
      <mat-form-field class="width-100">
        <mat-label>Название</mat-label>
        <input matInput [(ngModel)]="data">
      </mat-form-field>
    </div>
    <div mat-dialog-actions class="width-100 stretch">
      <button mat-button (click)="onNoClick()">Не сохранять</button>
      <button mat-raised-button [mat-dialog-close]="data" color="primary">Сохранить</button>
    </div>
  `,
  styles: [`
    .width-100 {
      width: 100%;
    }
    .stretch {
      display: flex;
      justify-content: space-between;
      padding-left: 24px;
      padding-right: 24px;
    }
  `]
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
