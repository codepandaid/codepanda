import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CoderModalComponent } from '../coder-modal/coder-modal.component';
import { CODERS } from '../coder-modal/mock-coder';
import { PandaCoder } from '../coder-modal/coder'
import { OrderDialogComponent } from '../order-dialog/order-dialog.component';

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

  id: string='aku datang';
  nama: string='awawawa';
  spesies: string;
  backgroundStory: string;
  skill: string;


  
  animal: string='unta';
  name: string='Vito Rizki Imanda';

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

  openCoder(pandaID: any): void {
    let dialogRef = this.coder.open(CoderModalComponent, {
      width: '90vw',
      data: { id: pandaID }
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The coder information was closed');
    });
  }

  openDialog(pandaID:any): void {
    let dialogRef = this.coder.open(OrderDialogComponent, {
      width: '90vw',
      data: { name: this.name, animal: this.animal, id: pandaID }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // coders = CODERS;

  // selectedPanda: PandaCoder;
  
  // onSelect(pandaCoder: PandaCoder): void {
  //   this.selectedPanda = pandaCoder;
  // }

}
