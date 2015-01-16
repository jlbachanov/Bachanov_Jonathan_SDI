/*
Jonathan Bachanov
SDI Campus
Conditionals
1/15/2015
 */
//alert("Testing to see if the JS file is attached to the html.".)

// Baic Conditional Statement

//Create a boolean variable to test

var oldEnough= true;

// If the child is old enough, then print to the console, You can Ride!

// basic structure of if statement

// if(condition to test) {code to run if the condition is ture}

if(oldEnough){ //code inside of {} will run if test is true.
    // this code will be skipped if code is false.
    console.log("You can ride the coaster!")

}
console.log ("What comes after the if the statement");

// Relational expression

// If the kid is over 48" tall, then he can ride
var kidHeight= 30;

// create a variable for minimum height
var minHeight= 48;

if(kidHeight > minHeight){
console.log("You are tall enough to ride");
} else {// code will run if test is false..
    console.log("Sorry, you are to short");

}
