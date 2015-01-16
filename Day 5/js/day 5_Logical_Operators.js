/**
 Jonathan Bachanov
 SDI Campus
 1/15/2015
 Logical Operators
 */
//alert("Testing to ");

//
/* true && true = true.
true && false = false
false && true= false
false && false= false

true || true= true
ture || false= true
false true= true
false false= false
!(true)= false
!(false)= true
 */

// if the price of the 3ds is less than budget lets buy it
// and if our paycheck is over 500 dollars
var budget= 200;
var dsPrice= 169;
var paycheck= 600;

if(dsPrice<budget && paycheck> 500 ){ console.log ("Buy the 3DS");

} else {console.log ("Do not buy the 3DS!  Because you are broke.");

}

//  Lets buy a smart tv if it less then our budget or we won the lotto.

var tvPrice= 540;
var tvBudget= 500;
var wonLottery= false;

if(tvPrice<tvBudget || wonLottery){console.log("Lets go buy a TV");}
    else{ console.log("Stick with your old TV");

    }


