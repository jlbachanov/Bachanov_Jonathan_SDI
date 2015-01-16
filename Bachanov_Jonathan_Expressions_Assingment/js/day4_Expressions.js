
 /*
Jonathan Bachanov
SDI Campus
1/13/2015
Expressions Assignment
 */
//alert ("Testing to see if it works");
// Gather the prices of lunch
 var monday= prompt("How much you spend on lunch on Monday?");// declare variable for userinput
 var tuesday= prompt("How much you spend on lunch on Tuesday?");   // declare variable for tuesday
 var wednesday= prompt("How much you spend on lunch on Wednesday?"); // declare variable for wednesday
 var thursday= prompt("How much you spend on lunch on Thursday?"); // declare variable for thursday
 var friday= prompt("How much you spend on lunch on Friday?"); // declare variable for friday
 monday= parseInt(monday);             //value of variable userinput
 tuesday= parseInt(tuesday);          //value of variable tuesday
 wednesday= parseInt(wednesday);           //value of variable wednesday
 thursday= parseInt(thursday);            //value of variable thursday
 friday= parseInt(friday);           //value of variable friday

 var week = [monday, tuesday, wednesday, thursday, friday];  // equation to define variable

 var total= week[0] + week[1] + week[2] + week[3] + week[4];  // equation to declare total amount of money all week.
 var nTotal = total/=5;
 var weekTotal= total *=5;
              // equation to define total amount of money spent each day.
 console.log("The amount of money that was spent on monday was " + monday + " dollars, on tuesday it was "+ tuesday +
 " dollars, on Wednesday it was " + wednesday + " dollars, on Thursday it was " + thursday + " dollars, on Friday it was " + friday+ " dollars. " +
 "The total amount of money spent for the week is " + weekTotal + " dollars. The average amount of money spent per day this week was "
 + nTotal+ " dollars.");  // Text string that is output to webpage.









