/*Jonathan Bachanov
 *01/29/15
 *Final Exam
 */
//alert("Testing");

var itemCost= prompt("What is the cost of an item?");// declaring variable for prompt.
 while (itemCost===""|| isNaN(itemCost)) { itemCost= prompt("Please do not leave blank and enter a numerical value.\nWhat is the cost of an item?");
    //code
}

var discount= prompt("What is the discount percentage of the product?");// declare varible for prompt discount

while(discount===""|| isNaN(discount)){
    discount= prompt("Please do not leave blank and enter a numerical value.\nWhat is the discountpercentage of the product?")
    
}
if (discount<=0||discount>=100) { discount= prompt("Please your discount number must be between 0-100.\n Reenter discount percentage.")
    //code
}

function price(i,d){
    var total= (i*(d/100));
    var regularPrice= i-total;
    return regularPrice;
}

var finalPrice= price(itemCost,discount);
console.log("The final cost of an item that costs $" + itemCost+ " with a discount of " + discount+ "% is " + "$" + finalPrice+".");