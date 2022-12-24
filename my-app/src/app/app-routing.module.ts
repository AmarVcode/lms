import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './myComponents/dashboard/dashboard.component';
import { HomeComponent } from './myComponents/home/home.component';
import { SubmissionComponent } from './myComponents/submission/submission.component';
import { TestComponent } from './myComponents/test/test.component';

const routes: Routes = [
{path:"" ,component: HomeComponent},
{path:"home" ,component: HomeComponent},
{path:"tests" ,component: TestComponent},
{path:"submissions" ,component: SubmissionComponent},
{path:"dashboard" ,component: DashboardComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
