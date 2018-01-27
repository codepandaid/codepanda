import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-coder-modal',
  templateUrl: './coder-modal.component.html',
  styleUrls: ['./coder-modal.component.css']
})
export class CoderModalComponent implements OnInit {

  constructor(public coder: MatDialog) { }

  ngOnInit() {
  }

}
