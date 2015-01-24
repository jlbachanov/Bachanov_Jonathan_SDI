/* Jonathan Bachanov
 * 1/24/2015
 * Random Number Generator
 */
//alert("dafsa");

// create variable for min and max value.

var min = prompt("Please enter a min value:");
//validate our min prompt
while(isNaN(min)|| min===""){
    // reprompt user for correct info
    min= prompt("Please do not leave blank and only use numbers. \nWhat is the minimum value?");
}




var max= prompt("Please enter a max value:");

//validate prompt for correct info
while(isNaN(max)|| max===""|| Number(min)>=Number(max)){
    if (isNaN(max)) {
        max= prompt("Please only use numbers. \nWhat is the max value:");
    } else if (max==="") {max= prompt("Please do not leave blank. \nWhat is the max value.");
        //code
    }else { max =prompt("Max value must be greater than min value. \nWhat is the max value.")
        //code
    }
    max= prompt("Please do not leave blank and only use numbers. \nWhat is the maximum value, it can not be?");
}



// Create function
function randomizer(mn,mx) {
    //generate our random number
    var randomNum = Math.round (Math.random()* (mx-mn)+ Number(mn));
// return that random number to our main code.
return randomNum;
}

//function call but create a varibale to catch the return value.

var ranNum= randomizer(min,max);
console.log("Your random number between " +min+
" and " + max+ " is "+ ranNum);



/// 15 random numebers between min and max
// for loop because of how many we know how many times we want to go thru

for(var i = 0; i<15; i++) {
    console.log(randomizer(min,max));
    
}