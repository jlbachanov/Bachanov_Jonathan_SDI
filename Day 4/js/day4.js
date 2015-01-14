/*
Jonathan Bachanov
SDI Campus
01/13/15
Day 4 In Class Assignment
 */

//alert("test");

// Create a Basic array
var avengersNames= ["Thor","Captain America","Ironman"];

// Print it out on the Console
console.log(avengersNames);
console.log(avengersNames[1]);

//Switch a team member
avengersNames[2]= "Spider-Man";

console.log(avengersNames);

// Add a team member
avengersNames[3]= "Black Widow";

console.log(avengersNames);

// use a variable as an index number
var num= 2;
console.log(avengersNames[num]);

// length property
// Dot syntax- use a period.
console.log(avengersNames.length);

// the last index number is the length minus one

// recruit a new team member

avengersNames[avengersNames.length] = "Powerman"

console.log(avengersNames);

// Pick oranges and track how many we have

var orangeBins= [12, 20, 14];

// How many bins of oranges did we pick in total.

var total= orangeBins [0] + orangeBins[1] + orangeBins[2];
console.log( "The total number of orange bins collected is "+ total);

// Advanced Array

var fruitBowl = ["orange","Tomato", "Strawberry"];

// Property- Length- How many items are in the array

console.log(fruitBowl.length);


// Method of Arrays

// push- insert an item a the end of our array
// arrayName.push(item to push)

fruitBowl.push("Apple");

//see fruitbowl
console.log(fruitBowl)

fruitBowl.push("Banana");
console.log(fruitBowl);


// pop- takes off the last item in an array AND returns it

// arrayName.pop()
// Create a variable to 'catch' the return value
var caught = fruitBowl.pop();
console.log(fruitBowl);
console.log(caught);
var caught2 = fruitBowl.pop();
fruitBowl.pop()
console.log(fruitBowl);
console.log(caught2);

// splice- used for removing or adding items into an existing array
// arrayName.splice(Index position to start from, # of items to remove, Items to put in)

fruitBowl.splice(1,0, "Banana");
console.log(fruitBowl);

fruitBowl.splice(1,1,"Kiwi");
console.log(fruitBowl);

// Adding more items
fruitBowl.splice(1,0,"Tangerine", "Babboa","Grapes") ;
console.log(fruitBowl);



