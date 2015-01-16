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

if(milesLeft>miles){console.log("Yes, you can make it without stopping for gas.");

}else {console.log("You only have " + gallonsLeft+ " gallons of gas in your tank, better get gas now while you can!");}
