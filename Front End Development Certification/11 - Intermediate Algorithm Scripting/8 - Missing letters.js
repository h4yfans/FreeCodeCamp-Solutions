
 /*
   + Created by Kaan Karaca on 20/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/


 function fearNotLetter(str) {

     var arr = str.split("");

     for(var i = 0; i<arr.length-1; i++){
         var current = arr[i].charCodeAt(0);

         if(arr[i+1].charCodeAt(0) !== current+1){
             return String.fromCharCode(current+1);
         }
     }

     return undefined;
 }

 fearNotLetter("ab");
