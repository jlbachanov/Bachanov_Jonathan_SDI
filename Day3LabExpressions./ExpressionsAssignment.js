// Jonathan Bachanov
// January 10th, 2015
// Lab #3

// Calculate how much pizza each party goer will receive.
var slices;  //Declare how many slices per pizza
var partyPeople; // Declare how many people attend the party.
var pizzas;  // Declare how pizzas are ordered.
var x;  // how much pizza each party goer will receive.

slices = 8; //Assigned value to number of slices.
partyPeople = 15; // Assigned value to number of party goers.
pizzas = 4; // Assigned value to number of pizzas.

x = (slices * pizzas)/ partyPeople; // total amount of slices divided by partypeople gives us the total of slices per person

console.log(x + " "+ "is the total amount of pizza slices each party goer receives.");

var sparky = 32%15;//  Total number of slices of pizza left over for sparky.
console.log (sparky + " " + "is the total amount of slices sparky would receive.");

// Calculate shopping bills costs.
var week1;  // declare week one grocery bill.
var week2;  // declare week two grocery bill.
var week3;  // declare week three grocery bill.
var week4;  // declare week four grocery bill.
var week5;  // declare week five grocery bill.

week1= 222; // amount assigned to week one spending.
week2= 323; // amount assigned to week two spending.
week3= 291; // amount assigned to week three spending.
week4= 321; // amount assigned to week four spending.
week5= 120; // amount assigned to week five spending.

var total; // declare total of all weeks combined.
total = week1 + week2 + week3 + week4+ week5 ; // defined total amount of weeks added.
var weekTotal;
weekTotal= 5;  // amount assigned to number of weeks.
console.log ("You have spent a total of" + " "+ total + " " + "on groceries over five weeks.  That is an average of"
+ " "+ total/weekTotal+ " " + "per week.")

// Calculate discounts

var op;  // original price of item
var dpct // discount percentage of item
var item // description of item
var tax  // sales tax on item

op= 19.99;// Assigned amount of item
dpt= .25; // discount percentage value
item= "new phone" // item described
tax= .10; // sales tax on item

var price;  // price of item with sales tax declared
price= op-(op * dpt);  // assigned value to price without sales tax.
var stprice; // declared amount of item with sales tax
stprice= price- (price* tax); // value of item with sales tax

console.log ("Your" + " "+ item + " "+"was originally"+ " " +op+ " " + "but after a 10% discount,it is	now	$" + price+ " "+ "without tax" + " "+
	stprice + " "+ "with tax.");






