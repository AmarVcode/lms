import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class SampletestService {

  constructor() { }

  test() {
    return [

      {
        id:1,
        question: "Which animal is known as the 'Ship of the Desert' ?",
        option: ["Dog", "Cat", "Camel", "Porcupine"],
        correct: "Camel"
      },
      {
        id:2,
        question: "What is the Capital of India ?",
        option: ["Calcutta", "Delhi", "Mumbai", "Banglore"],
        correct: "Delhi"
      },
      {
        id:3,
        question: "What is EvenPrime Number ?",
        option: [1, 3, 4, 2],
        correct: 2
      },
      {
        id:4,
        question: "which state is heaven of India ?",
        option: ["Maharastra", "Delhi", "Kashmir", "Uttar Pradesh"],
        correct: "Kashmir"
      },
      {id:5,
        question: "Which Desert is largest in world ?",
        option: ["Sahara Desert", "Gobi Desert", "Thar Desert", "Arabian Desert"],
        correct: "Sahara Desert"
      },
      {
        id:6,
        question: "Which is oldest City in India ?",
        option: ["Mumbai", "Surat", "Prayagraj", "Varansi"],
        correct: "Varansi"
      },
      {
        id:7,
        question:"Which is Biggest Cat in world ?",
        option:["Siberian tiger","lion","jaguar","puma"],
        correct: "Siberian tiger"
      },
      {
        id:8,
        question:"How Many Vowels in Engliah Alphabets ?",
        option:[3,5,7,11],
        correct: 5
      },
      {
        id:9,
        question:"How Many Basic Operator In Maths ?",
        option:[1,2,3,4],
        correct: 4
      },
      {
        id:10,
        question:"How many Letter in 'Letters' ?",
        option:[6,8,1,7],
        correct: 7
      }
    ]
  }



  htmltest() {
    return [

      {
        id:1,
        question: "Which animal is known as the 'Ship of the Desert' ?",
        option: ["Dog", "Cat", "Camel", "Porcupine"],
        correct: "Camel"
      },
      {
        id:2,
        question: "What is the Capital of India ?",
        option: ["Calcutta", "Delhi", "Mumbai", "Banglore"],
        correct: "Delhi"
      },
      {
        id:3,
        question: "What is EvenPrime Number ?",
        option: [1, 3, 4, 2],
        correct: 2
      },
      {
        id:4,
        question: "which state is heaven of India ?",
        option: ["Maharastra", "Delhi", "Kashmir", "Uttar Pradesh"],
        correct: "Kashmir"
      },
      {id:5,
        question: "Which Desert is largest in world ?",
        option: ["Sahara Desert", "Gobi Desert", "Thar Desert", "Arabian Desert"],
        correct: "Sahara Desert"
      },
      {
        id:6,
        question: "Which is oldest City in India ?",
        option: ["Mumbai", "Surat", "Prayagraj", "Varansi"],
        correct: "Varansi"
      },
      {
        id:7,
        question:"Which is Biggest Cat in world ?",
        option:["Siberian tiger","lion","jaguar","puma"],
        correct: "Siberian tiger"
      },
      {
        id:8,
        question:"How Many Vowels in Engliah Alphabets ?",
        option:[3,5,7,11],
        correct: 5
      },
      {
        id:9,
        question:"How Many Basic Operator In Maths ?",
        option:[1,2,3,4],
        correct: 4
      },
      {
        id:10,
        question:"How many Letter in 'Letters' ?",
        option:[6,8,1,7],
        correct: 7
      }
    ]
  }
}
