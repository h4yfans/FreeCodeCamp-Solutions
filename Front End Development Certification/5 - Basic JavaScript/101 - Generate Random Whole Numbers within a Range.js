
 /*
   + Created by Kaan Karaca on 18/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/

 // Example
 function ourFunction(ourMin, ourMax) {

     return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
 }

 ourFunction(1, 9);

 // Only change code below this line.

 function randomRange(myMin, myMax) {

     return Math.floor(Math.random() * (myMax - myMin +1) + myMin); // Change this line

 }

 // Change these values to test your function
 var myRandom = randomRange(5, 15);

