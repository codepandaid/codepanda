import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { OrderDialogComponent } from './order-dialog/order-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codepanda';

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}


  openDialog(): void {
    let dialogRef = this.dialog.open(OrderDialogComponent, {
      width: '90vw',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
