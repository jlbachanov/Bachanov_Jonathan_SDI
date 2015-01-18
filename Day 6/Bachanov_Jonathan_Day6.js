//alert("JavaScript works!");

/*
 *Jonathan Bachanov
 *SDI 1501
 *Day 6
 */
// Is my Steak done the way I like it.

/*
 *120 and under is undercooked
 *120-124 steak is rare
 *125-129 steak is medium rar
 *130-139 medium
 *140-149 steak medium well 
 *150-165 well down
 *>165 is burnt to a crisp
 */
//var steakTemp= 145;
//var steakDone;
//
//if(steakTemp<=120){steakDone= "Not Done"}
//else if(steakTemp<=124){steakDone= "Rare steak";} else if (steakTemp<=129) {steakDone="Steak is medium"}
//else if (steakTemp<=139) {steakDone="Steak is medium";
//    //code
//}else if (steakTemp<=149) {steakDone="Steak is medium well";
//    //code
//}else if (steakTemp<=165) {steakDone="Steak is medium well";
//    //code
//}else {steakDone="Steak is burnt to a crisp.";
//    //code
//} console.log(steakDone);
//
//// Beach trip
////get out side temp
//var airTemp=parseInt( prompt("What is the Temperatue outside?","65"));
//
//// create water temperature variable
//var waterTemp;
////conditional to see whats going on
//if (airTemp>=85) {console.log("We are going to the Beach");
//   waterTemp= parseInt(prompt("What is the temperature of the water?","75"));
// 
// if(waterTemp>= 75){console.log("Lets go in the water.")}
// else{console.log("Lets build a sandcastle.")}//code
//}else{ console.log("We are going to the movies.");}


















// round()
// normal round .5 and up

var num1= 9.544444
console.log(num1);
num1 = Math.round(num1); console.log(num1);


///floor(x), returns x rounded down

var num2= 6.1; console.log (num2);
num2= Math.floor(num2); console.log (num2);


/// ceiling (x), returns x rounded up
var num3= 12.2; console.log(num3);
num3= Math.ceil(num3); console.log(num3);

// random()
/// returns number between 0-1
var num4= Math.round(Math.random()*100); console.log(num4);

// Random number between two number
// Math.random() * (max-min) + min

var num5= Math.round(Math.random () * (80-50) + 50); console.log(num5);

console.log(Math.PI);
