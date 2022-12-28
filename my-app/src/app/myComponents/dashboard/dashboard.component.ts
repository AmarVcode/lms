import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {


  store:any=localStorage.getItem("examinfo")

  public data:any=JSON.parse(this.store)||[]
  

 

  constructor(){
  this.data.sort((a:any, b:any) => {
    return b.gotmarks - a.gotmarks;
});
  }
  

}
