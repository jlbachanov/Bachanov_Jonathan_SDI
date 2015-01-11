/*
Jonathan Bachanov
1/10/2015
Day 3 Coding
 */

// Single lined comment

//This is an alert
//alert("Testing to see if this is connected!");

//Console.log - allows programmers to see information
console.log("This is the console.");


// Declare a variable
// Use the keyword of var
var whatever1;   // Declaration of a variable
whatever1 = 42;  // Definition of variable

console.log(whatever1);

// Declare and define a variable
var a = 2;
console.log(a);

//Simple math
a = a+3;
console.log(a);

var b;
b= a+3;
console.log(b);
console.log(a);

//Find our age
var yearBorn = 1989;

//age is calculated by current year minus year born
var currentYear = 2015;

var age = currentYear - yearBorn -1;
console.log(age);

//Math
// +, -, *, /

//Find area of triangle
//1/2 * base * height
var base = 4;
var height= 5;

var areaTriangle= 1/2 * base * height;
console.log(areaTriangle);

// Modulo - %
//Gives remainder
var remainder= 32%10
console.log(remainder);

// Find if even or odd
//Modulo by 2 %2
//1 if it is odd
// 0 if it is even
var evenOrOdd = 67%2
console.log(evenOrOdd);

//assignment operators
/*
= Assignment
++ adds 1 to the variable
-- subtracts 1 from the variable
+=number Addition Assignment
 -=number subtraction assignment
 /=number division assignment\
 *= multiplication assignment
 */

var counter= 1 ;
counter++;
console.log(counter);

counter--; // counter= counter - 1;
console.log(counter);
counter +=3; // counter= counter + 3
console.log(counter);

counter -=2; // counter = counter - 2
console.log(counter);

counter /=2;  // counter= counter / 2
console.log(counter);

counter *=4; // counter = counter * 4
console.log (counter);


// String - is any text variable
// " is used at the begining and end of the string"
// Used to distinguish between variable name and random text.
// single quotes ' double " ares both used BUT THEY MUST MATCH

var kermit = "light green";

var frogName= "kermit";

// Double quote or single quote?
// can use an escaping character\ backslash in front of the apostrophe

var phrase = 'I don\'t know!';
console.log (phrase)


// Multi-Lines by using \n- new line character
var phrase2 = "I don't know!\nYou never know!";
console.log(phrase2);

