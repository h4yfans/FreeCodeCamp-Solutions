
 /*
   + Created by Kaan Karaca on 18/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/

 function mutation(arr) {

     var i = 0;
     var count = 0;
     while(i!==-1 && arr[1].length>count){
         i = arr[0].toLowerCase().indexOf(arr[1].toLowerCase().charAt(count));
         if (i===-1) return false;
         count++;
     }
     return true;
 }

 mutation(["Mary", "Army"]);
