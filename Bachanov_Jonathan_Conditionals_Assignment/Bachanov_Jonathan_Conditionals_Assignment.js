
 /*
Jonathan Bachanov
SDI Campus
1/13/2015
Prompting*/

// alert("Testing to see if it works");

/* Brainstorm	an	original	idea	for	a	calculator	of	some	kind.		This	should	not	be	anything
 we	have	covered	in	class	and	not	the	same	as	any	of	your	other	projects.
     Keep	in	mind	that	your	final	project	must	contain the	following:
     a. An	example	of	2 different	arithmetic	operators (addition	and subtraction,
     addition	and multiplication,	subtraction	and division,	etc.).
 b. 2	conditional	statements	– A	least	one	must	contain	an	else	if	statement
  c. At	least	1	ternary	conditional	statement	must	be	used
 d. At	least	1	Logical	Operator	&&	,	||	or	!
     e. Must	contain	at	least	3	user	prompts	that	are	used	in	calculations
 f. All	prompts	must	be	validated
 //  A person wants to go on a nice vacation. Depending on their costs, we will find out what they can and can't afford
 on vacation or if they even can go at all.

 */

var vacation= prompt("How much money do you have to spend for vacation");  // Declare variable for vacation
 var flight= prompt("How much money do you have to spend on a flight");// Declare variable for flight
 var hotel= prompt("How much money do you have to spend on a hotel");// Declare a variable for hotel
 var fishing= 50;
 var partying= 50;
 var shopping=200;



 if (vacation===""){
  prompt("How much did you want to spend for vacation?");
 }


 if (flight==="") {
  prompt("How much is the cost on your flight?");
 }

 if (hotel===""){
  prompt("How much is the cost on your hotel?");
 }

 if (vacation>=flight + hotel + fishing + partying + shopping  && vacation>= 2000 )
 {console.log("You have enough money to go shopping, fishing," +

 " partying and your vacation was expensive. ");}
 else if (vacation>=flight + hotel + fishing + partying + shopping ){console.log("You have enough " +
 "money to go shopping, fishing, partying and have a nice budget vacation.");}

 else if (vacation>= flight + hotel +fishing + partying){console.log("You have enough money to go on vacation, go fishing and party");}
else if (vacation >= flight + hotel + fishing) {console.log("You are having a really cheap vacation and can only afford to go fishing.");
 } else {
  console.log("you cant go on vacation");
 }