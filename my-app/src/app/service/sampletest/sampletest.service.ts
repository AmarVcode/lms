import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class SampletestService {

  constructor() { }

  sampletest() {
    return [

      {
        id:1,
        question: "Which animal is known as the 'Ship of the Desert' ?",
        option: ["Dog", "Cat", "Camel", "Porcupine"],
        correct: 3
      },
      {
        id:2,
        question: "What is the Capital of India ?",
        option: ["Calcutta", "Delhi", "Mumbai", "Banglore"],
        correct: 2
      },
      {
        id:3,
        question: "What is EvenPrime Number ?",
        option: [1, 3, 4, 2],
        correct: 4
      },
      {
        id:4,
        question: "which state is heaven of India ?",
        option: ["Maharastra", "Delhi", "Kashmir", "Uttar Pradesh"],
        correct: 3
      },
      {id:5,
        question: "Which Desert is largest in world ?",
        option: ["Sahara Desert", "Gobi Desert", "Thar Desert", "Arabian Desert"],
        correct: 1
      },
      {
        id:6,
        question: "Which is oldest City in India ?",
        option: ["Mumbai", "Surat", "Prayagraj", "Varansi"],
        correct: 4
      },
      {
        id:7,
        question:"Which is Biggest Cat in world",
        option:["Siberian tiger","lion","jaguar","puma"],
        correct: 1
      },
      {
        id:8,
        question:"How Many Vowels in Engliah Alphabets",
        option:[3,5,7,11],
        correct: 2
      }
    ]
  }
}
