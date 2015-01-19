
 /*
Jonathan Bachanov
SDI Campus
1/13/2015
Prompting Conditionals Assignments*/


 //  A person wants to go on a nice budget vacation. Depending on their costs,
 // we will find out what they can and can't afford.


var flight= prompt("Assuming your budget is $2,000 for vacation, how much would you spend on a flight?");  // Declare variable for budget
 var hotel= prompt("How much money would spend on a hotel?");// Declare variable for flight
 var activities = prompt("How much money would you spend for the activities?");// Declare a variable for hotel





 if  (flight==="")  {flight1=
  prompt("How much did you want to spend on a flight?");}

 if (hotel==="") { hotel1=
  prompt("How much is the cost on your hotel?");}

 if (activities===("")){var activities1=
  prompt("How much would you spend for the activities?");}

 activities= parseInt(activities)||parseInt(activities1);
 flight= parseInt(flight)|| parseInt(flight1);
 hotel= parseInt(hotel) || parseInt(hotel1);

 total= activities + flight + hotel;

 total2= (total<=2000)? ("You have enough money to go on vacation and do all the activities.") :
     (total-activities <= 2000) ? ("You have enough money to go on vacation, but can't do any activities") :
         ("You are to broke and can't go on vacation.");

 console.log(total2);

















