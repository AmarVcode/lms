import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './myComponents/navbar/navbar.component';
import { FooterComponent } from './myComponents/footer/footer.component';
import { TestComponent } from './myComponents/test/test.component';
import { TestService } from './service/test/test.service';
import { SubmissionComponent } from './myComponents/submission/submission.component';
import { DashboardComponent } from './myComponents/dashboard/dashboard.component';
import { HomeComponent } from './myComponents/home/home.component';
import SampletestService from './service/sampletest/sampletest.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TestComponent,
    SubmissionComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TestService,
    SampletestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
