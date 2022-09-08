import {AfterViewInit, Component, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {PostServiceService} from "./post-service.service";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {FormControl, FormGroup} from '@angular/forms';


export interface EmployeeData {
  name: string;
  email: string;
  hourly_rate: number;
  overtime_hourly_rate: number;
  id: number;
}

let ELEMENT_DATA: EmployeeData[] = [];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{


  displayedColumns: string[] = ['id', 'name', 'email', 'hourly_rate', 'overtime_hourly_rate', 'select'];
  dataSource:any;

  selectedAll: boolean = false;
  selectedRow: any;

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  checkedRows: any = [];
  checkedRowsIndexes: any = [];

  constructor(private postService: PostServiceService, public dialog: MatDialog) {

  }

  ngOnInit(): void {

    this.postService.getPosts().subscribe((response => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
    }))

  }

  addOrRemoveRow(id:number,data:any,event: any) {
    let index = this.checkedRowsIndexes.indexOf(id)
    if (index === -1) {
      this.checkedRowsIndexes.push(id);
      this.checkedRows.push(data)
    } else {
      this.checkedRowsIndexes.splice(index, 1)
      this.checkedRows.splice(index, 1)
    }
  }

  toggleCheckBox(elementId: number){
    return (this.checkedRows.indexOf(elementId) != -1) ? true : false;
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '60%',
      height: "80%",
      enterAnimationDuration,
      exitAnimationDuration,
      data: {checkedRows: this.checkedRows},
    });
  }


}

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: './dialog-animations-example-dialog.html',
})
export class DialogAnimationsExampleDialog {

  constructor( @Inject(MAT_DIALOG_DATA)  public data:any) {}


  ngOnInit(): void {};

  employeeForm = new FormGroup({
    employeeId : new FormControl(''),
    employeeName : new FormControl(''),
    employeeEmail : new FormControl(''),
    employeeHourlyRate : new FormControl(''),
    employeeOvertimeHourlyRate : new FormControl(''),

  })

}
