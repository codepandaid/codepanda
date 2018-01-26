import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { DataService } from './data.service';
import { AppComponent } from './app.component';


import { HomeComponent } from './home/home.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { AboutComponent } from './about/about.component';


import { RouterModule, Routes} from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { OrderDialogComponent } from './order-dialog/order-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanyProfileComponent,
    AboutComponent,
    OrderDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,

    // For Router or Page Navigation
    RouterModule.forRoot([
      {
        path: '', 
        component: HomeComponent
      },      
      
      {
        path: 'profile', 
        component: CompanyProfileComponent
      },
      
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'order', 
        component: OrderDialogComponent
      }
    ])

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }


// CLI Command
//generater new component: ng generate component order-dialog --module=app.module