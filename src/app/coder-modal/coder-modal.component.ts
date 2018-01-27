import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PandaCoder } from './coder';
import { CODERS } from './mock-coder';

@Component({
  selector: 'app-coder-modal',
  templateUrl: './coder-modal.component.html',
  styleUrls: ['./coder-modal.component.css']
})
export class CoderModalComponent implements OnInit {

  coders = CODERS;

  // pandaCoder: PandaCoder = {

  //   id: "PC-010",
  //   nama: "rakish",
  //   spesies: "Panda",
  //   backgroundStory: "Pada Suatu Hari. . .",
  //   skill: "HTML, CSS"
  // }

  constructor(public coder: MatDialog,
    public dialog: MatDialog, 
    public dialogRef: MatDialogRef<CoderModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  
}