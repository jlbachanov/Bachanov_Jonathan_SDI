/*
 Jonathan Bachanov
 SDI Campus
 Conditionals
 1/15/2015
 */
//alert ("Testing to see if it works");
// A driver has to determine if they can make it across the desert with their current fuel.
// They are about to past the last gas station for the next 200 miles and they need to determine whether they should stop now for gas or not.
// given:
//Gas efficiency of the car (in mpg)
//Gauge reading of the gas tank (in %)
//Car’s gas tank capacity (in gallons)

var mpg= prompt("What is the mpg of your car?");
var gasTank= prompt("What is the percentage of gas left in the tank?");
var tankSize= prompt("How many gallons does the gas tank hold?");
var miles= 200;
var milesLeft= tankSize * mpg * (gasTank/100);
var gallonsLeft= milesLeft/mpg;

mpg= parseInt(mpg);
gasTank= parseInt(gasTank);
tankSize=parseInt(tankSize);

if(milesLeft >= 200){console.log("Yes, you can make it without stopping for gas.");

}else {console.log("You only have " + gallonsLeft+ " gallons of gas in your tank, better get gas now while you can!");}




//A+95-100 A 90-94 B+ 85-89 B 80-84 C+76-79 C73-75 D70-72 F0-69

var x = 65;
var grade;

grade= (100>=x>=95)? "You have earned a " + x + "% which is an A+ in the class. " : (94>=x>=90)? "You have earned a " + x + "% which is an A in the class."
    : (89>=x>=85)? "You have earned a " + x + "% which is an B+ in the class." : (84>=x>=80)? "You have earned a " + x + "% which is an B in the class."
    : (79>=x>=76)? "You have earned a " + x + "% which is an C+ in the class.":
    (75>=x>=73)? "You have earned a " + x + "% which is an C in the class.": (72>=x>=70)? "You have earned a " + x + "% which is an D in the class."
        : "You have earned a " + x + "% which is an F in the class.";
console.log(grade);