
 /*
   + Created by Kaan Karaca on 20/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/

 function translatePigLatin(str) {
     var newStr = "";
     var regex = /[aeiou]/gi;

     if(str[0].match(regex)){
         newStr = str + "way";
     }else{
         var index = str.indexOf(str.match(regex)[0]);
         newStr = str.substr(index) + str.substr(0,index) + "ay";
     }

     return newStr;
 }

 translatePigLatin("california");
