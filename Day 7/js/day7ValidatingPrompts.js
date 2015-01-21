/* Jonathan Bachanov
 * 1/20/2015
 *
 */
//alert("Testing");\

var userInput= prompt("please type in your name.");

// validating a prompt with an conditional.
if (userInput==="")
// user didnt type anything
{ userInput= prompt("Please do not leave a blank, type in your name?");
    //code
}

// instead use a while loop!!
// check in the input multiple times as many as it takes.

var firstName= prompt ("Please type in your first name:");
while(firstName==="") /// user didnt type in anything. time to reprompt.

{firstName= prompt("Please type in your first name and don't leave blank.");
    
}



/// test to see if it a number
/// isNan()- test what i sinside of the parenthesis.  is it not Nan. is it not a number.
///// numbers return false.  everything else comes true.

console.log(isNaN("monkey"));
console.log(isNaN(7));

var age= prompt("Please enter your age :") ;
// validate user typed in a number

while (isNaN(age) || age===""){
    //code runs anytime that the age is not a number Remprompt the user for a num
    age=prompt ("Only use numbers.");
}
var choice= prompt("Please type in Yes or No:");
choice= choice.toLowerCase();
//convert to lower case
while (choice!="yes" && choice !="no") {
choice = prompt("Please only type in yes or no")    //code
;}