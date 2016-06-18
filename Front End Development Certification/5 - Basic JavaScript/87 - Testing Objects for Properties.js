
 /*
   + Created by Kaan Karaca on 18/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/

 // Setup
 var myObj = {
     gift: "pony",
     pet: "kitten",
     bed: "sleigh"
 };

 function checkObj(checkProp) {

     return myObj.hasOwnProperty(checkProp) ? myObj[checkProp] : "Not Found";


 }

 // Test your code by modifying these values
 checkObj("gift");
