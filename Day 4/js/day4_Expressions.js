
 /*
Jonathan Bachanov
SDI Campus
1/13/2015
Expressions Assignment
 */
//alert ("Testing to see if it works");
// Gather the prices of lunch
 var userInput= prompt("How much you spend on lunch on Monday?");
 var userInput1= prompt("How much you spend on lunch on Tuesday?");
 var userInput2= prompt("How much you spend on lunch on Wednesday?");
 var userInput3= prompt("How much you spend on lunch on Thursday?");
 var userInput4= prompt("How much you spend on lunch on Friday?");
 userInput= parseInt(userInput);
 userInput1= parseInt(userInput1);
 userInput2= parseInt(userInput2);
 userInput3= parseInt(userInput3);
 userInput4= parseInt(userInput4);

 var userInputs = [userInput, userInput1, userInput2, userInput3, userInput4];

 userInputs[0] +=   userInputs[1] += userInputs[2] += userInputs[3] += userInputs[4];

 var total = userInputs[0];
 var nTotal = total/5;
 console.log(nTotal);







