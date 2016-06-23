
 /*
   + Created by Kaan Karaca on 23/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/

 function findElement(arr, func) {
     var num = 0;

     for(var i = 0; i<arr.length ; i++){
         if(func(arr[i])){
             num = arr[i];
             return num;
         }
     }
     return undefined;


 }

 findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
