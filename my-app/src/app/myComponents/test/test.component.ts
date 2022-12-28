import { Component } from '@angular/core';
import { TestService } from 'src/app/service/test/test.service';
import { NgFor } from '@angular/common';
import  SampletestService  from 'src/app/service/sampletest/sampletest.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  public test: any = []

  
  
  
  
  
  constructor(private testtype: TestService) {
    this.test = this.testtype.typetest()
  }

  storeexam(t:any){
    t=JSON.stringify(t)
    localStorage.setItem("exam",t)
  }

  

}
