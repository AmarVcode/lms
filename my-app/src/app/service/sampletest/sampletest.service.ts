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
        question: "What are Tags ?",
        option: ["opening tag", "content", "ending tag", "Basic Building Blocks"],
        correct: "Basic Building Blocks"
      },
      {
        id:2,
        question: "How many types of heading does an HTML contain ?",
        option: [3,5,6,9],
        correct: 6
      },
      {
        id:3,
        question: "How to create a hyperlink in HTML By Using Which Tag ?",
        option: ["<p href='#'>Tag</p>","<anchor href='#'>tag</anchor>","<a href='#'>tag</a>","<link href='#'>tag</link>"],
        correct: "<a href='#'>tag</a>"
      },
      {
        id:4,
        question: "Which HTML tag is used to display the data in the tabular form ?",
        option: ["Table tag","Grid tag","Tabular tag","div tag"],
        correct: "Table tag"
      },
      {id:5,
        question: "What is an image map ?",
        option: ["Using Map as a Image", "different web pages link using a single image", "Using Goggle Map", "Using Current Loction "],
        correct: "different web pages link using a single image"
      },
      {
        id:6,
        question: "How to create a nested webpage in HTML ?",
        option: ["Web tag", "page tag", "frame tag", "iframe tag"],
        correct: "iframe tag"
      },
      {
        id:7,
        question:"How Many Empty Element in HTML?",
        option:[2,4,6,8],
        correct: 2
      },
      {
        id:8,
        question:"What is the canvas element in HTML5 ?",
        option:["related to Painting","related to Graphics","related to API","related to DSA"],
        correct: "related to Graphics"
      },
      {
        id:9,
        question:"How many types of video formats are supported by HTML5 ?",
        option:[1,2,3,4],
        correct: 3
      },
      {
        id:10,
        question:"How many types of Audio formats are supported by HTML5 ?",
        option:[2,3,6,11],
        correct: 3
      }
    ]
  }
}
