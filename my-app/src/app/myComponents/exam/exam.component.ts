import { Component } from '@angular/core';
import SampletestService from 'src/app/service/sampletest/sampletest.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent {

  public exam:any = []
  public time:boolean=true
  public markseach:number=0
  public count=0


showtime(){
  let date =new Date()

  let milisec:any=date.getMilliseconds()
  let sec:any=date.getSeconds()
  let min:any=date.getMinutes()
  let hours:any=date.getHours()
  if(hours===0){
    hours=12
  }
  if(hours>12){
hours=hours-12
  }
  let todaydate:any=date.getDate()
  let todayday:any=date.getDay()
switch(todayday){
  case 1:
    todayday="Monday"
    break;
  case 2:
    todayday="Tuesday"
    break;
  case 3:
    todayday="Wednesday"
    break;
  case 4:
    todayday="Thursday"
    break;
  case 5:
    todayday="Friday"
    break;
  case 6:
    todayday="Saturday"
    break;
  default:
    todayday="Sunday"
}

  let todaymonth:any=date.getMonth()
switch(todaymonth){
  case 1:
    todaymonth="January"
    break;
  case 2:
    todaymonth="February"
    break;
  case 3:
    todaymonth="March"
    break;
  case 4:
    todaymonth="April"
    break;
  case 5:
    todaymonth="May"
    break;
  case 6:
    todaymonth="June"
    break;
  case 7:
    todaymonth="July"
    break;
  case 8:
    todaymonth="August"
    break;
  case 9:
    todaymonth="September"
    break;
  case 10:
    todaymonth="October"
    break;
  case 11:
    todaymonth="November"
    break;
  default:
    todaymonth="December"
}

  let todayyear:any=date.getFullYear()

  console.log(todayyear)

  let div=document.createElement("div")
  let milisectag:any=document.createElement("h3")
  milisec="Millieconds "+milisec
  milisectag.innerText=milisec
  let sectag=document.createElement("h3")
  sec="Seconds "+sec
  sectag.innerText=sec
  let mintag=document.createElement("h3")
  min="Minutes "+min
  mintag.innerText=min
  let hourstag=document.createElement("h3")
  hours="Hours "+hours
  hourstag.innerText=hours
  let daytag=document.createElement("h3")
  todayday="Day "+todayday
  daytag.innerText=todayday
  let datetag=document.createElement("h3")
  todaydate="Date "+todaydate
  datetag.innerText=todaydate
  let monthtag=document.createElement("h3")
  todaymonth="Month "+todaymonth
  monthtag.innerText=todaymonth
  let yeartag=document.createElement("h3")
  todayyear="Year "+todayyear
  yeartag.innerText=todayyear
  








div.append(yeartag,monthtag,datetag,daytag,hourstag,mintag,sectag,milisectag)
let d:any= document.getElementById("datehere")


if(this.time===true){
  d.innerHTML=null
  document.getElementById("datehere")?.append(div)
  this.time=false
}
}










//taking data with local storage for fetching sampletest service properly
public testtype:any=localStorage.getItem("exam")


constructor(private test:SampletestService){
  this.testtype=JSON.parse(this.testtype)
  let type:any=this.testtype.calltest
  this.markseach=this.testtype.marksperquestion
  console.log(this.markseach)
  if(type==="test"){
      this.exam=test.test()
    }
    // console.log(this.exam)
}


check(c:any,a:any,q:any){
console.log(c,a)
let btn:any=document.getElementById(q);
btn.style.display="none"
if(c===a){
  this.count=this.markseach+this.count
  console.log(this.count)
}


}



}
