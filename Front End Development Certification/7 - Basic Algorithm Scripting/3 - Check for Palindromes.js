
 /*
   + Created by Kaan Karaca on 18/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/

 function palindrome(str) {
     var rege = str.toLowerCase().replace(/[\W_]/g,"");

     return rege === rege.split("").reverse().join("");
 }



 palindrome("eye");
