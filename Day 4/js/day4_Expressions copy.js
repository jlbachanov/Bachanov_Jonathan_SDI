
 /*
Jonathan Bachanov
SDI Campus
1/13/2015
EExpressions Assignment
 */
//alert ("Testing to see if it works");
// Gather the prices of lunch
 var userInput= prompt("How much you spend on lunch on Monday?");// declare variable for userinput
 var userInput1= prompt("How much you spend on lunch on Tuesday?");   // declare variable for userinput1
 var userInput2= prompt("How much you spend on lunch on Wednesday?"); // declare variable for userinput2
 var userInput3= prompt("How much you spend on lunch on Thursday?"); // declare variable for userinput3
 var userInput4= prompt("How much you spend on lunch on Friday?"); // declare variable for userinput4
 userInput= parseInt(userInput);             //value of variable userinput
 userInput1= parseInt(userInput1);          //value of variable userinput1
 userInput2= parseInt(userInput2);           //value of variable userinput2
 userInput3= parseInt(userInput3);            //value of variable userinput3
 userInput4= parseInt(userInput4);           //value of variable userinput4

 var userInputs = [userInput, userInput1, userInput2, userInput3, userInput4];  // equation to define variable

 userInputs[0] +=   userInputs[1] += userInputs[2] += userInputs[3] += userInputs[4];  // equation to declare total amount of money all week.

 var total = userInputs[0];           // defining total amount of money spent for the week
 var nTotal = total/=5;              // equation to define total amount of money spent each day.
 console.log("The amount of money that was spent on monday was " + userInput + " dollars, on Tuesday it was "+ userInput1 +
 " dollars,on Wednesday it was " + userInput2 + " dollars,on Thursday it was " + userInput3 + " dollars,on Friday it was " + userInput4+ " dollars. " +
 "The total amount of money spent for the week is " + userInputs[0] + " dollars. The average amount of money spent per day this week was "
 + nTotal+ ".");  // Text string that is output to webpage.









