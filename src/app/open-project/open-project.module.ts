import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenProjectComponent } from './open-project.component';
import {RouterModule, Routes} from "@angular/router";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatDialogModule} from "@angular/material/dialog";

const routes: Routes = [
  {
    path: '',
    component: OpenProjectComponent
  },
];

@NgModule({
  declarations: [
    OpenProjectComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    FormsModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule
  ]
})
export class OpenProjectModule { }
