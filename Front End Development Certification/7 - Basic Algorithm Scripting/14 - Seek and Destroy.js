
 /*
   + Created by Kaan Karaca on 18/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/
 function destroyer(arr) {
     // Remove all the values
     var args = Array.prototype.slice.call(arguments, 1);

     return arr.filter(function (val){
         return args.indexOf(val) === -1;
     });

 }


 destroyer([1, 2, 3, 1, 2, 3], 2, 3);
