
 /*
   + Created by Kaan Karaca on 18/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/

 var array = [4,5,6,7,8];
 var singleVal = 0;

 // Only change code below this line.

 var singleVal = array.reduce(function(previousVal, currentVal){
     return previousVal + currentVal;
 });
