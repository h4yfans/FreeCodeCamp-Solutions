
 /*
   + Created by Kaan Karaca on 19/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/


 function sumAll(arr) {
     var sortedArr = arr.sort((a,b) => a-b);
     var first = arr[0];
     var last = arr[1];
     var sum = (last-first+1) * (first + last)/2;
     return sum;
 }



 sumAll([1, 4]);