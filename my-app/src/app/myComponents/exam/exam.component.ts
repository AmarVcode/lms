import { Component } from '@angular/core';
import SampletestService from 'src/app/service/sampletest/sampletest.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent {

  public exam:any = []


constructor(private test:SampletestService){
    this.exam=test.test()
    console.log(this.exam)
    timer()
    function timer(){
  console.log("working")
  setTimeout(timer,1000)
}
}





}
