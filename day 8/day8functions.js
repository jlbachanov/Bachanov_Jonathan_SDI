
/* Jonathan Bachanov
 * 1/22/2015
 * Basic Functions
 * */


//function functionName(){code will run}
 // function call - "go button"- functionName();;

// Creating a function that longs on to console "hello"

function printHello() {
    
    console.log("Hello! You are inside the print hello function");
    //code
}

// function call to start our print hello function

printHello();

printHello();

printMore();
/// create a function to print more text

function printMore(){
    
    console.log("Inside of print more. here is more text!");
}

// create a function that calculates the area of a rectangle

function calcArea(){
    var width= 20;
    var height= 30;
    var Area= width* height;
    console.log ("The area is " + Area);
}

calcArea();