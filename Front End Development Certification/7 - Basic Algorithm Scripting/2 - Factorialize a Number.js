
 /*
   + Created by Kaan Karaca on 18/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/

 function factorialize(num) {
     if(num<=1) return 1;

     return num * factorialize(num-1);
 }

 factorialize(5);
