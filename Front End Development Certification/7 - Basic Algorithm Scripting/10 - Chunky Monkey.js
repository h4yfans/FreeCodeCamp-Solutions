
 /*
   + Created by Kaan Karaca on 18/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/
 function chunkArrayInGroups(arr, size) {
     var result = [], i=0;
     while (i<arr.length) result.push(arr.slice(i,i+=size));
     return result;
 }

 chunkArrayInGroups(["a", "b", "c", "d"], 2);
