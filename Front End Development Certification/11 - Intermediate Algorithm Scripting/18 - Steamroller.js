
 /*
   + Created by Kaan Karaca on 23/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/


 function steamrollArray(arr) {


     return arr.reduce(function(flat, toFlatten){
         return flat.concat(Array.isArray(toFlatten) ? steamrollArray(toFlatten) : toFlatten);
     },[]);


 }

 steamrollArray([1, [2], [3, [[4]]]  ]);
