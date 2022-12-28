import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

public tho=""


constructor(){
  let thought=[
    '“The purpose of our lives is to be happy.” - Dalai Lama',
    '“Life is what happens when you’re busy making other plans.” - John Lennon',
    '“Get busy living or get busy dying.” - Stephen King',
    '“You only live once, but if you do it right, once is enough.” - Mae West',
    '“Many of life’s failures are people who did not realize how close they were to success when they gave up.” - Thomas A. Edison',
    '“If you want to live a happy life, tie it to a goal, not to people or things.” - Albert Einstein',
    '“Never let the fear of striking out keep you from playing the game.” - Babe Ruth',
    '“In order to write about life first, you must live it.” - Ernest Hemingway',
    '“We are here to add what we can to life, not to get what we can from life.” - William Osler',
    '"Work in Silence, Let Success Make Noise"'
  ]

  let ran:any=Math.random()
  ran=ran*10
  ran=Math.floor(ran)
console.log(ran)
  this.tho=thought[ran]
}

}
