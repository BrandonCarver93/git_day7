"use strict"

/*  for(let i = 0; i < 101; i++){
    if (i % 3 == 0)
    console.log("fizz")
    else if (i % 5 == 0)
    console.log("buzz")
    else if (i % 15 == 0)
    console.log("Fizzbuzz")
    else
    console.log(i) 
 } 
 let word = "hello";
let reversedWord = word[4] + word[3] + word[2] + word[1] + word[0]
console.log(reversedWord); 

let word = "hello";
let reversedWord = word[word.length - 1];
console.log(reversedWord); */
/* 
let word = "hello";
for (let i = word.length - 1; i > 0; i--) {
    console.log(word[i]);
} */

let word = "hello";
let reversedWord = ""
for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i]
}
console.log(reversedWord);