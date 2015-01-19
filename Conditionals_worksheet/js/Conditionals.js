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

var mpg= prompt("What is the mpg of your car?"); // Ask user the mpg
var gasTank= prompt("What is the percentage of gas left in the tank?");//ask user pct of tank left.
var tankSize= prompt("How many gallons does the gas tank hold?");// ask user tanksize in gallons
var miles= 200; // total of miles
var milesLeft= tankSize * mpg * (gasTank/100); // miles left equations
var gallonsLeft= milesLeft/mpg; // gallonsLeft equations

mpg= parseInt(mpg); //
gasTank= parseInt(gasTank);
tankSize=parseInt(tankSize);

if(milesLeft >= miles){console.log("Yes, you can make it without stopping for gas.");

}else {console.log("You only have " + gallonsLeft+ " gallons of gas in your tank, better get gas now while you can!");}




//A+95-100 A 90-94 B+ 85-89 B 80-84 C+76-79 C73-75 D70-72 F0-69

var x = 94;
var grade;

grade= (x>=95)? "You have earned a " + x + "% which is a A+ in the class. " : (x>=90)? "You have earned a " + x + "% which is a A in the class."
    : (x>=85)? "You have earned a " + x + "% which is a B+ in the class." : (x>=80)? "You have earned a " + x + "% which is a B in the class."
    : (x>=76)? "You have earned a " + x + "% which is a C+ in the class.":
    (x>=73)? "You have earned a " + x + "% which is a C in the class.":
        (x>=70)? "You have earned a " + x + "% which is a D in the class."
        : "You have earned a " + x + "% which is a F in the class.";
console.log(grade);

// To meet to maintenance standards a car’s front two tires should have the same pressure and the back two tires should have the same
// pressure. But the front tires and the rear tires can have different pressure than each other, so it is
// not necessary for all four tires’ pressure to be the same. Create a single conditional that would determine
// if the tires of a given car are up to spec

var tires= [30, 30,11 ,22 ];
if(tires[1]===tires[2] && tires[3]===tires[4]){console.log("Tires pass the test.");}
else{console.log("Get your tires checked.");}
