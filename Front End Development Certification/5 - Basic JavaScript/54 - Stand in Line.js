
 /*
   + Created by Kaan Karaca on 18/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/
 // Setup
 var myArr = [1,2,3,4,5];

 function nextInLine(arr, item) {
     arr.push(item);
     return arr.shift();
 }

 // Display Code
 console.log("Before: " + JSON.stringify(myArr));
 console.log(nextInLine(myArr, 6)); // Modify this line to test
 console.log("After: " + JSON.stringify(myArr));
