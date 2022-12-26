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
      noOfQuestion:8,
      abouttest:["genral Knowledge","Simple Question"],
      marks:80,
      calltest:"test",
      marksperquestion:10
    }
  ]
}
}

