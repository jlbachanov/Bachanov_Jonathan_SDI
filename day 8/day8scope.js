/* Jonathan Bachanov
 * 1/22/2015
 * basic scope
 * */

//alert("testing");

// variable scope
// variable inside and outside of a function

// try not to use the same variable names
// however in large fiels this going to be impossible

//variable inside functions can only be seen inside those functions

// create a variable for widthin our MAIN code

var width = 5;// scoped outside of the function - main code

// create a function that calculate the perimeter or a rectangle

function calcPeri() {
    var width= 10; // Scoped to the function calcPeri
console.log("INside of the function the value of width is " + width );
var height= 20;
var perimeter= width*2 + height*2;
console.log("Inside of the function the perimeter is " + perimeter);

}
console.log("Before call " + width);
calcPeri();
console.log ("after call" + width);