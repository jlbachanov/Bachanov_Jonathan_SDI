/*Jonathan Bachanov
 *01/24/2015
 *Function Assignment
 */
//alert("TEsting");

// How big do you think the Pyramid of Giza is?

var h= prompt("How many feet high do you think the Great Pyramid of Giza is?"); //declaring variable and prompting user to answer how tall the pyramid of giza.
while (h===""||isNaN(h)){
    prompt("Please do not leave blank and enter number. \nHow many feet high do you think the Great Pyramid of Giza is?.");
}
var w= prompt("How many feet do you think the width of the Great Pyramid of Giza is?");// declaring variable and prompting user to answer how tall their fridge is.
while(w===""||isNaN(w)){
    prompt("Please do not leave blank and enter a number. \nHow many feet do you think the width of the Great Pyramid of Giza is?")
}
var l= prompt("How many feet do you think the length of the Great Pyramid of Giza is?");
while(l===""||isNaN(l)){
    prompt("Please do not leave blank. \nHow many feet do you think the length of the Great Pyramid of Giza is?");
}

h= parseInt(h);
w= parseInt(w);
l= parseInt(l);

function userInput(h,w,l) {
    var userTotal= .333*h*w*l;
    return userTotal;
}
 var userResults= userInput(h,w,l);
 console.log(userResults);
 

//var giza= 8486909.46