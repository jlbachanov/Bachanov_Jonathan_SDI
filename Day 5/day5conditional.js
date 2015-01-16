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

// if(condition to test) {code to run if the condition is true
// }else{ code to run if condition is false}

if(oldEnough){ //code inside of {} will run if test is true.
    // this code will be skipped if code is false.
    console.log("You can ride the coaster!")

}
console.log ("What comes after the if the statement");

// Relational expression

// If the kid is over 48" tall, then he can ride
var kidHeight= 47;

// create a variable for minimum height
var minHeight= 48;

// create a variable for a shoe lift

var shoeLift= 2;
// Is the child tall enough with shoe lift




if(kidHeight + shoeLift > minHeight){
console.log("You are tall enough to ride");
} else {// code will run if test is false..
    console.log("Sorry, you are to short");

}




// What ride can the kid go on based on his height?
// IF the kid is 48 + then Space Mountain
//If 40+ then Buzz Lightyear
// Anything short- Winnie the Pooh

var childHeight= 42;

if(childHeight>=48){console.log("You can ride Space Mountain, Buzz Lightyear and Winnie the Pooh");

} else if(childHeight>=40){ console.log("You ride Buzz Lightyear and Winnie the Pooh.");

} else {console.log("You can only ride Winnie the Pooh");
}


// if, else if, else statement
//  if(condition1 to test){
// Code to run if conditon is true}
// else if (condition2){ Condition2 will only be tested if condition 1 is false.
// Code to run if condition2 is true
// } as many as else ifs as needed
// else (){
// Code to run if conditon 1 and conditon 2 are false.
// }