//Jonathan Bachanov
 /* 01/20//2015
/ Loops worksheet

// when do you get your drivers license.
*/
 
 var age= prompt("How old are you?");
 var license = 18;
 
 while(isNaN(age) || age==="") {age= prompt("How old are you?")
    //code
 }
 
age= parseInt(age); if (age>18) console.log ("You are already old enough to drive.");
    //code


 for(age;age<18; age++)
 console.log("Your only " + age+ " years old you can't drive yet.");