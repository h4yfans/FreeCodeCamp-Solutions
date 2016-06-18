
 /*
   + Created by Kaan Karaca on 18/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/
 function truncateString(str, num) {
     if (str.length>num) {
         if (num <=3) str = str.substr(0,num);
         else str = str.substr(0,num-3);
         str += '...';
     }
     return str;
 }


 truncateString("Absolutely Longer", 2);