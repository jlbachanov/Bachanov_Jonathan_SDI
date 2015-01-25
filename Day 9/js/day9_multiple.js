/*Jonathan Bachanov
 *1/24/2015
 *Multiples
 **/
//alert("testing");
// prompt user for width and heigh
// calculate both the area and perimeter of a rectangle
// first set up area of a rectangle function

function areaRect(w,h){
    //area of a rectangle is width*height

var area= w*h;
return area;
}

function periRect(w,h) {
    
    // perimeter of a rectangle is 2* width + 2*height
    var perimeter= 2*w+2*h;
    return perimeter;
}


// prompt user for width and height

var width= prompt("Please enter the width of your rectangle:");
// validate it
while(width===""|| isNaN(width)) {
    width= prompt("Please do not leave blank and only use numbers. \nWhat is the width?")
}

var height= prompt ("Please enter the height of your rectangle:")
while(height===""|| isNaN(height)){
    height=prompt ("Please do not leave blank and only type in numbers");
}

/// function call both functions... ONE at a time

var resultArea= areaRect(width,height);
var resultPeri= periRect(width,height);

// report out to user
console.log ("The area of the rectangle is " + resultArea+ " and the perimeter is " + resultPeri + ".");

// combined function to calculate

function combinedRect(w,h){
    //Calculate the area first
    var area= w * h;
    //calculate the perimeter
    var peri= 2*w+ 2*h;
    
    //return both values
    return[area,peri];
    
}



/// function call
var combinedResults= combinedRect(width,height);
console.log(combinedResults[0]);
console.log(combinedResults[1]);