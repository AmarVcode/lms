import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestService {

  constructor() {}


typetest(){
  return [
    {
      testname:"Sample Test",
      noOfQuestion:10,
      abouttest:["genral Knowledge","Simple Question"],
      marks:100,
      calltest:"test",
      marksperquestion:10
    },
    {
      testname:"HTML Test",
      noOfQuestion:10,
      abouttest:["HTML","Tags","Element","basic HTML","HTML5"],
      marks:100,
      calltest:"htmltest",
      marksperquestion:10
    }

  ]
}
}

