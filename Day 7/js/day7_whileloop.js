/*Jonathan Bachanov
 *1/20/2015
 *while loops*/

//alert("testing");

// basic while loop
// the while loops, loops through a block of code as long as the condition is true

/*
 * var i= 0;
 * while(condition){
    //code that runs while condition is true
 // incremental change to the counting variable- OR infinite loop!!!!
 
 }*/

var counter= 0// intializing variable counter
while (counter<20) {
    ///Code that will run as long as counter is less then 20
    console.log(counter + " Somethings just never end");
    
    counter++;
    //code
}

// do while loop
// The code will run AT LEAST once before checking the condition.

var i= 20;



do { //this code will run before condition is checked.
    // it will also run as long as the condition is TRUE!!!!!!
    console.log("The number is " + i);
    i ++ ;
} while(i<10);

