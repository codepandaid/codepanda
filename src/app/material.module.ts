import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// place to import angular materials ( so it;s going to be organized here )
import { MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatIconModule, MatDialogModule, MatGridListModule } from '@angular/material';
// place to import angular materials ( so it;s going to be organized here ) ^^^^

@NgModule({
  imports: [ MatButtonModule, MatToolbarModule, MatInputModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatIconModule, MatDialogModule, MatGridListModule ],

  exports: [ MatButtonModule, MatToolbarModule, MatInputModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatIconModule, MatDialogModule, MatGridListModule ],
})
export class MaterialModule { }