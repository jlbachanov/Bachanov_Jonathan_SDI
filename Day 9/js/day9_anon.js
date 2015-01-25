/* Jonathan Bachanov
 * 01/24/2015
 * Anonymous Functions
*/
//alert("testing");


// Anonymouse functions are widely used in JS and Jquery
//Important in object oriented programming.
// can be used interchangable with normal functions, if done correcttly
// very quick and easy
// saves on memory



//*Basic structure of anonymous function

 //var functionName= function(parameters){
    ///code to run!! insert here!!}
// Function call before function is defined.
var results2= triArea(6,7);
console.log("before the function results2 is " + results2);

// function call before the anon function is defined
/*THIS DOES NOT WORK
var results4= triAreaAnon(7,8)
*/



// create a normal function for are of triangle

function triArea(b,h){
    //Area = 1/2 * base * height
    var area = .5 * b* h;
    return area;
    
    
}

// Function call for this

var results1= triArea(5,6);
console.log(results1);

// create anonymouse function that creates the area of the triangle.

var triAreaAnon= function(b,h){
    var area = .5*b*h;
    return area;
    
    
};
var results3 = triAreaAnon(4,5);
console.log("Results of anonymous function after define is " + results3);









