/*Jonathan Bachanov
 *01/24/2015
 *Function Assignment
 */
//alert("TEsting");

// How big do you think the Pyramid of Giza is?

var height= prompt("How many meters high do you think the Great Pyramid of Giza is?"); //declaring variable and prompting user to answer how tall the pyramid of giza.
while (height===""||isNaN(height)){
    height=prompt("Please do not leave blank and enter number. \nHow many meters high do you think the Great Pyramid of Giza is?.");
}
var width= prompt("How many meters do you think the width of the Great Pyramid of Giza is?");// declaring variable and prompting user to answer how tall their fridge is.
while(width===""||isNaN(width)){
    width= prompt("Please do not leave blank and enter a number. \nHow many meters do you think the width of the Great Pyramid of Giza is?")
}
var length= prompt("How many meters do you think the length of the Great Pyramid of Giza is?");
while(length===""||isNaN(length)){
   length= prompt("Please do not leave blank. \nHow many meters do you think the length of the Great Pyramid of Giza is?");
}


function calcVolume(h,w,l){
    var volume= h*w*l*.3333;
    return volume;
 
}

var results=calcVolume(width,height,length);
console.log(results);