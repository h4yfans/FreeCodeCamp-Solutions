
 /*
   + Created by Kaan Karaca on 18/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/
 function findLongestWord(str) {
     return str.split(' ').reduce(function(prev, curr) {
         return Math.max(prev, curr.length);
     }, 0);
 }

 findLongestWord("The quick brown fox jumped over the lazy dog");
