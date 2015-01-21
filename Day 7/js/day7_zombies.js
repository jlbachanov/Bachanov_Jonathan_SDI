/*
 *Jonathan Bachanov
 *1/20/2015
 *Zombie Attack
 */
//alert("testing");

// Zombie Attack
// there is a zombie at full sail.  it can bite 4 people a day and turn them into zombies.  Now the cdc want to knows
// how many zombies will be there in 8 days.

var numZombies= 1 ;// how many zombies that exist now
var numBites= 4; // how many bites per zombies per day.
var days= 8; // number of days.
var daysTake= 0;/*
for(var i = 1; i<= days; i++){
    // how many new zombies get made AND when do they go bite people.
    //they get bitten then the next day they can bite.
    
   var newZombies= numBites * numZombies;// New zombies made every day
    numZombies += newZombies ;//update total number of zombies at end of the day
    console.log("There are " + numZombies + " zombies at the end of the day #" +i+ "!");//report at the end of the day
}

// how many days will it take to reach a million zombies.*/

while(newZombies <=1000000){
    //new zombies a day
    newZombies = numBites* numZombies;
    newZombies += numZombies;
    daysTake++;//Add 1 to total days it takes
    
    
}
console.log("It will take " + daysTake + " days for a million zombies.");