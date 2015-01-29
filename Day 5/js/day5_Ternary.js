 
 /*
Jonathan Bachanov
SDI Campus
1/13/2015
Prompting
 */
//alert ("Testing to see if it works");

 // If gpa is greater than 2.0 you can graduate!

 // (condition to test) ? true code: false code;

 //normal if else statement

var gpa= 1.8;


if(gpa> 2.0){console.log("Congrats you can graduate")

} else { console.log("Sorry your GPA is way to low");
}

 // ternary way
 (gpa>2.0) ? console.log ("Congrats you can graduate!") : console.log ("You can not graduate");



 // Decide what book a kid will read.
 var age= 16;
 var book;

 // if the child is under 10 - they read green eggs and ham.
 // otherwise they can read the time machine.
 // if the child is older then 15 then he can read twilight
 book= (age<10)? ("Green eggs and Ham") : "The time machine";

 var book2 = (age<10)? "Green eggs and Ham" : (age<15) ? "The Time machine" : "Twilight";
 console.log("You should read " + book ) ;
 console.log (book2);