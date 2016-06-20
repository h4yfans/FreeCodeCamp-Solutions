
 /*
   + Created by Kaan Karaca on 20/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/


 function myReplace(str, before, after) {

     var arr = [];

     arr = str.split(" ");
     for(var i = 0; i<arr.length; i++){
         if(arr[i]===before){
             if(before[0].toUpperCase() === before[0]){
                 arr[i] = after[0].toUpperCase() + after.substring(1);
             }else{
                 arr[i] = after[0].toLowerCase() + after.substring(1);
             }
         }
     }

     return arr.join(" ");
 }

 myReplace("Let us go to the store", "store", "mall");