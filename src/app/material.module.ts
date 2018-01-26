import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// place to import angular materials ( so it;s going to be organized here )
import { MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatIconModule, MatDialogModule } from '@angular/material';
// place to import angular materials ( so it;s going to be organized here ) ^^^^

@NgModule({
  imports: [ MatButtonModule, MatToolbarModule, MatInputModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatIconModule, MatDialogModule ],

  exports: [ MatButtonModule, MatToolbarModule, MatInputModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatIconModule, MatDialogModule ],
})
export class MaterialModule { }