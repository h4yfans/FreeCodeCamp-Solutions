
 /*
   + Created by Kaan Karaca on 18/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/
 function titleCase(str) {
     word = str.toLowerCase().split(" ");

     for (var i = 0; i < word.length; i++) {
         var letters = word[i].split("");
         letters[0] = letters[0].toUpperCase();
         word[i] = letters.join("");
     }

     return word.join(" ");
 }


 titleCase("I'm a little tea pot");
