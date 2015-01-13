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
