import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DefaultComponent} from "./default.component";
import {DashboardComponent, DialogAnimationsExampleDialog} from "../../modules/dashboard/dashboard.component";
import {RouterModule} from "@angular/router";
import {BulkEditComponent} from "../../modules/bulk-edit/bulk-edit.component";
import {SharedModule} from "../../shared/shared.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatDividerModule} from "@angular/material/divider";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {AppModalComponent} from "../../modules/app-modal/app-modal.component";
import {MatDialogModule} from "@angular/material/dialog";




@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    BulkEditComponent,
    AppModalComponent,
    DialogAnimationsExampleDialog
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule
  ]
})
export class DefaultModule { }
