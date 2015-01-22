

var names= ["scooby", "shaggy",
        "velma", "fred"];



for (var i=0; i<names.length; i++){
    console.log(i);
    console.log(names[i]);
    console.log("You solved the case " + names[1]);
    
}

//create an array of bills and add them up

var bills= [50,10,5,20,10];

/// create a variable to hold the total

var totalBills = 0;

for(var j= 0; j<bills.length; j++){
   // totalBills= totalBills + bills[j];
   // bills that are equal to or greater then 20 dollars
   if (bills[j]>= 20) { totalBills+= bills[j];
    //code
   }
}
console.log("The total of the bills is " + totalBills);