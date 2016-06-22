
 /*
   + Created by Kaan Karaca on 22/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/

 function spinalCase(str) {
     // "It's such a fine line between stupid, and clever."
     // --David St. Hubbins
     // find the whitespace and underscore
     var regex = /[\s_]/g;

     str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
     str =str.replace(regex,"-").toLowerCase();


     return str;
 }

 

 spinalCase('This Is Spinal Tap');
