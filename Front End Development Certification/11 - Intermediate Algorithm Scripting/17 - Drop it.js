
 /*
   + Created by Kaan Karaca on 23/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/

 function dropElements(arr, func) {
     // Drop them elements.

     var temp = arr.length;

     for(var i = 0; i < temp; i++){
         if(!func(arr[i]) && !func(arr[0])){
             arr.shift(arr[i]);
         }
     }

     return arr;

 }

 dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;});