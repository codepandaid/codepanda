import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { OrderDialogComponent } from './order-dialog/order-dialog.component';
import { CoderModalComponent } from './coder-modal/coder-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  title = 'codepanda';

  animal: string;
  name: string;
  id: number;
  bio: HTMLTextAreaElement;
  skill: HTMLTextAreaElement;

  constructor(public dialog: MatDialog, public coder: MatDialog) {}


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

  openCoder(): void {
    let dialogRef = this.coder.open(CoderModalComponent, {
      width: '90vw',
      data: { id: this.id ,name: this.name, bio: this.bio, skill: this.skill }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The coder information was closed');
      this.id = result;
      this.name = result;
      this.bio = result;
      this.skill = result;
    });
  }
}
