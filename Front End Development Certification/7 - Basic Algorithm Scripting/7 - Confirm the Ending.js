
 /*
   + Created by Kaan Karaca on 18/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/

 function confirmEnding(str, target) {
     // "Never give up and good luck will find you."
     // -- Falcor
     return str.substring(str.length-target.length)===target;
 }

 confirmEnding("Bastian", "n");
