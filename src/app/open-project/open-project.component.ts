import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {DialogOverviewExampleDialog} from "../counting-ranks/save-dialog";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-open-project',
  templateUrl: './open-project.component.html',
  styleUrls: ['./open-project.component.scss']
})
export class OpenProjectComponent {
  reglan: { name: string, checked: boolean }[] = [];
  savedProjects = [];
  selectedProject = '';
  file = null;

  constructor(private router: Router, public dialog: MatDialog, private snack: MatSnackBar) {
    this.getProjects();
  }

  getProjects(): void {
    // @ts-ignore
    this.savedProjects = localStorage.getItem('reglan_ranks!') ? localStorage.getItem('reglan_ranks!')?.split(';') : [];
  }

  selectProject(event: string): void {
    const reglan = localStorage.getItem(event);
    // @ts-ignore
    this.reglan = JSON.parse(reglan);
    this.file = null;
  }

  navigateToRanks(): void {
    this.router.navigate(['ranks']);
  }

  delete(): void {
    localStorage.removeItem(this.selectedProject);
    let savedProjects = localStorage.getItem('reglan_ranks!') ? localStorage.getItem('reglan_ranks!')?.split(';') : [];
    // @ts-ignore
    savedProjects = savedProjects.filter(x => x !== this.selectedProject);
    // @ts-ignore
    localStorage.setItem('reglan_ranks!', savedProjects.join(';'));
    this.reglan = [];
    this.selectedProject = '';
    this.getProjects();
  }

  save(): void {
    localStorage.setItem(this.selectedProject, JSON.stringify(this.reglan));
    this.snack.open('Успешно сохранено', undefined, {duration: 2000})
  }

  readFile(event: any): void {
    const file:File = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      // @ts-ignore
      const fileContent = fileReader.result.toString();
      const content = fileContent.split('\n');
      this.reglan = content.map(c => ({checked: false, name: c}));
      // @ts-ignore
      this.file = file;
    }
    fileReader.readAsText(file);
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
      this.getProjects();
    });
  }
}
