/*Jonathan Bachanov
 *01/24/2015
 *Function Assignment
 */
//alert("TEsting");

// How big do you think the Pyramid of Giza is?

var height= prompt("How many meters high do you think the Great Pyramid of Giza is?"); //declaring variable and prompting user to answer how tall the pyramid of giza.
while (height===""||isNaN(height)){
    height=prompt("Please do not leave blank and enter number. \nHow many meters high do you think the Great Pyramid of Giza is?.");// validating variable height from prompt
}
var width= prompt("How many meters do you think the width of the Great Pyramid of Giza is?");// declaring variable and prompting user to answer how many meters the width is.
while(width===""||isNaN(width)){
    width= prompt("Please do not leave blank and enter a number. \nHow many meters do you think the width of the Great Pyramid of Giza is?"); // validating variable and prompting user to answer to answer how many meters do they think the width is?
}
var length= prompt("How many meters do you think the length of the Great Pyramid of Giza is?");//prompt question to define variable
while(length===""||isNaN(length)){//while statement to validate prompt
   length= prompt("Please do not leave blank. \nHow many meters do you think the length of the Great Pyramid of Giza is?");//reprompt if length is equal to text or not a number
}


function calcVolume(h,w,l){/// function to calculate volume of userinput pyramid
    var volume= h*w*l*.3333;/// formula to configure pyramid volume
    return volume;// returns the value of the function
 
}


var results=calcVolume(height,width,length);// variable for the function call

var difference= function (r,g){// anonymous function 
    var both= r+g;// equation to find total of guessed size and actual size
    return both;};/// value returned of both equation

var totalBoth= difference(results,2586810);// results is outcome of firstfunction. number is actual pyramid of giza size

console.log("You thought the Great Pyramid was " + results.toFixed(2)+ " cubic meters. Your prediction and the actual Pyramid combined are " + totalBoth.toFixed(2) + " cubic meters.");// output to the computer.
   
    
    
    

