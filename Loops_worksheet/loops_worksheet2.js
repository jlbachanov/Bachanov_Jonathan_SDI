/* Jonathan Bachanov
 * 01/20/2015
 * loops worksheet problem 2*/

// There is a serious herpes breakout here in orlando.  A woman can give it to three partners a night. After the partners have it they
/// can give it to 3 partners a night. How many days will it take to reach five million.

var herpesWoman= 1; // the first case of the newly mutated hepafection disease.
var infected= 3;// can infect 3 a night.
var week= 7; // how many people effected in 7 days.
var dayZero= 0; // ground zero on the infection.

var herpesCases =herpesWoman*infected;
while (herpesCases<= 5000000) {
herpesCases += infected;
dayZero++;//code
}console.log("It will take " + dayZero+ " herpes infected individuals to produce five million infected");