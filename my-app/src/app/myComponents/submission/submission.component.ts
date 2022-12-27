import { Component } from '@angular/core';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.scss']
})
export class SubmissionComponent {


  store:any=localStorage.getItem("examinfo")

  public data:any=JSON.parse(this.store)||[]
  constructor(){
    this.data=this.data.reverse()
    console.log(this.data)
  }
  


}
