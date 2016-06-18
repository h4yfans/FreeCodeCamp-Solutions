
 /*
   + Created by Kaan Karaca on 18/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/

 // Setup
 var testString = "There are 3 cats but 4 dogs.";

 // Only change code below this line.

 var expression = /\d+/g;  // Change this line

 // Only change code above this line

 // This code counts the matches of expression in testString
 var digitCount = testString.match(expression).length;
