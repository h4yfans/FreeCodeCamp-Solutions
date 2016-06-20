
 /*
   + Created by Kaan Karaca on 20/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/

 function uniteUnique(arr1) {

     var newArr = [];
     var i = 0;

     while(arguments[i]){
         newArr = newArr.concat(arguments[i]);
         i++;
     }

     return newArr.filter(function(item,pos){
         return newArr.indexOf(item) == pos;
     });

 }

 uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
