import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CoderModalComponent } from '../coder-modal/coder-modal.component';
import { CODERS } from '../coder-modal/mock-coder';
import { PandaCoder } from '../coder-modal/coder'

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  hideElement = true;

  constructor(public coder: MatDialog) { }

  ngOnInit() {
  }

  id: string;
  nama: string;
  spesies: string;
  backgroundStory: string;
  skill: string;

  // openCoder(data): void {
  //   let dialogRef = this.coder.open(CoderModalComponent, {
  //     width: '90vw',
  //     data: { id: this.id ,nama: this.nama, spesies: this.spesies, backgroundStory: this.backgroundStory , skill: this.skill }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The coder information was closed');
  //     this.id = result;
  //     this.nama = result;
  //     this.spesies = result;
  //     this.backgroundStory = result;      
  //     this.skill = result;
  //   });
  // }

  openCoder(data): void {
    let dialogRef = this.coder.open(CoderModalComponent, {
      width: '90vw',
      data: { id: this.id ,nama: this.nama, spesies: this.spesies, backgroundStory: this.backgroundStory , skill: this.skill }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The coder information was closed');
      this.id = result;
      this.nama = result;
      this.spesies = result;
      this.backgroundStory = result;      
      this.skill = result;
    });
  }

  // coders = CODERS;

  // selectedPanda: PandaCoder;
  
  // onSelect(pandaCoder: PandaCoder): void {
  //   this.selectedPanda = pandaCoder;
  // }

}
