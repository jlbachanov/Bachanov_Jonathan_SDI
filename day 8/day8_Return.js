/* Jonathan Bachanov
 * 1/22/2015
 * Return
 */
//alert("dafds");
function calcArea(w,h) {
    // Calc the area
    var area= w*h;
    //console.log(area);
    
    return area;
}

// function call
// create a variable that will catch the return


var returnedArea= calcArea(77,9);


console.log(returnedArea);



// create to calculate an area of a circle
//area= pi *r*r

function circleArea(radius){
    var area= Math.PI * radius* radius;
    
    
    /// return this area
    return area;
    
    
}

// function call
var result= circleArea(10);

console.log("The area of circle is " + result );

var twoArea= result * 2;

console.log("The area of both circles is " + twoArea.toFixed(2));

var result2= circleArea(3);
console.log ("The area of a circle with a radius of 3 is " + result2.toFixed(3));


/// Prompt user for radius then calculate the area

var userRad= prompt("Please type in a radius:");

// Validate prompt

while(isNaN(userRad)|| userRad===""){
    userRad = prompt("Please only use numbers. \nType in a radius:");
    
}
//parse the variable

userRad= parseInt(userRad);

// Create a varible to catch the results


var userResults= circleArea(userRad);

console.log("The area of your circle is " + userResults.toFixed(3));