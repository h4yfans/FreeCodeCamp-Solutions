
 /*
   + Created by Kaan Karaca on 18/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/

 // Setup
 var testString = "How many non-space characters are there in this sentence?";

 // Only change code below this line.

 var expression = /\S/g ;  // Change this line

 // Only change code above this line

 // This code counts the matches of expression in testString
 var nonSpaceCount = testString.match(expression).length;
