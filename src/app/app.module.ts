import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes} from '@angular/router'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanyProfileComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,

    // For Router or Page Navigation
    RouterModule.forRoot([
      {
        path: '', 
        component: HomeComponent
      },      
      
      {
        path: 'company-profile', 
        component: CompanyProfileComponent
      },
      
      {
        path: 'about/:id',
        component: AboutComponent
      }
    ])

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
