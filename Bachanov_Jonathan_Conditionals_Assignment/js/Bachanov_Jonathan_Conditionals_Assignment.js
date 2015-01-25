
 /*
Jonathan Bachanov
SDI Campus
1/13/2015
Prompting Conditionals Assignments*/


 //  A person wants to go on a nice budget vacation. Depending on their costs,
 // we will find out what they can and can't afford.


var flight= prompt("Assuming your budget is $2,000 for vacation, how much would you spend on a flight?");  // Declare variable for budget
 var hotel= prompt("How much money would you spend on a hotel?");// Declare variable for flight
 var activities = prompt("How much money would you spend for the activities?");// Declare a variable for hotel
var budget=2000;




 if  (flight==="")  {flight1=
  prompt("How much did you want to spend on a flight?");} // if statement that will re ask prompt.

 if (hotel==="") { hotel1=
  prompt("How much is the cost on your hotel?");}// if statement that will re ask prompt.

 if (activities===("")){activities1=
  prompt("How much would you spend for the activities?");}//if statement that will re ask prompt

 activities= parseInt(activities)||parseInt(activities1);// taking out integer "or" statement to define value of activities.
 flight= parseInt(flight)|| parseInt(flight1);// taking out integer from "or" statement to define flight
 hotel= parseInt(hotel) || parseInt(hotel1);// taking out integer from "or" statement to define hotel.

 total= activities + flight + hotel;// declare and define the value of the new variable total. make it easier to write ternary.

 total2= (total<=2000)? ("You have enough money to go on vacation and do all the activities.") :// ternary if total<= 2,000 then "".
     (total-activities <= 2000) ? ("You have enough money to go on vacation, but can't do any activities") ://ternary else if  total minus activities <= 2000 then ""
         ("Your trying to spend money you don't have.");// else you cant go

 console.log (total2); /// outputing the total2.

















