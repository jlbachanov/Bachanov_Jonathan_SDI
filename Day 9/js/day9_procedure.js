/* Jonathan Bachanov
 * 1/24/2015
 * procedures
 */
//alert( "Procedures");

// this is a basic function

function calcArea(width,height){
    var area= width*height ;
    return area;
    
    
}
///function call
/// create a variable to catch the return value

var results=calcArea(4,5);
console.log(results);



////this is a procedure it does not return a value
////list of steps to do
function calcAreaP(width,height){
    var area= width* height//calculations
    console.log(area);/// it will not have a returnn
}


// function call for a procedure
calcAreaP(6,7);

alert("test");// procedure
var userInput= prompt("ask a question");/// prompting is a function
