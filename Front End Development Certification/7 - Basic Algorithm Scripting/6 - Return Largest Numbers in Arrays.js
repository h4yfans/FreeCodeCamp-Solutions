
 /*
   + Created by Kaan Karaca on 18/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/
 function largestOfFour(arr) {
     // You can do this!
     var max = 0;
     var newArr = [];

     for (var i = 0; i < arr.length; i++) {
         for (var j = 0; j < arr.length; j++) {
             max = Math.max(max, arr[i][j]);
         }
         newArr.push(max);
         max= 0;
     }
     return newArr;

 }


 /*function largestOfFour(arr) {
  return arr.map(function(item){
  return Math.max.apply(null, item);
  });
  } */


 largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
