import { Component } from '@angular/core';
import SampletestService from 'src/app/service/sampletest/sampletest.service';
import { NgFor } from '@angular/common';
import { empty } from 'rxjs';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent {
  public title:string=""
  public exam:any = []
  public time:boolean=true
  public markseach:number=0
  public total:number=0
  public count=0
  public username=""
  public saved=""
  public local=true
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
  

  let savedtime=todayyear+" - "+todaymonth+" - "+todaydate+" - "+todayday+" - "+hours+" - "+min+" - "+sec+" - "+milisec
  this.saved=savedtime






div.append(yeartag,monthtag,datetag,daytag,hourstag,mintag,sectag,milisectag)
let d:any= document.getElementById("datehere")
let user:any=document.getElementById("username")
user=user.value
this.username=user
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
  this.title=this.testtype.testname
  this.total=this.testtype.marks
  if(type==="test"){
      this.exam=test.test()
    }
  else if(type==="htmltest"){
      this.exam=test.htmltest()
    }
    // console.log(this.exam)
}


check(c:any,a:any,q:any){
  if(this.username!==""){

  
let btn:any=document.getElementById(q);
btn.style.display="none"

let ans=document.getElementById("ans")

let h3=document.createElement("h3")
h3.innerHTML=q+" --------> "+a

ans?.append(h3)
if(c===a){
  this.count=this.markseach+this.count
}


}


}




onsub(){
  let obj={
    user:this.username,
    test:this.testtype.testname,
    totalmarks:this.total,
    gotmarks:this.count,
    time:this.saved
  }
let data:any=[]
let store:any=localStorage.getItem("examinfo")
  store=JSON.parse(store)
  
  store=store||data


  store.push(obj)
  store=JSON.stringify(store)
  
  if(this.local===true){
    localStorage.setItem("examinfo",store)
    this.local=false
  }
window.scroll(0,0)
location.reload()
}

}
