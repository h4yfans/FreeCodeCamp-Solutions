
 /*
   + Created by Kaan Karaca on 18/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/
 function getIndexToIns(arr, num) {
     // Find my place in this sorted array.

     // first thing to do is sort the array in increasing order
     arr.sort( function( a, b ) { return b < a; });
     for ( var i = 0; i < arr.length; i++ ) {
         if ( arr[i] >= num ) { return i;}
     }
     return arr.length;
 }

 getIndexToIns([5, 3, 20, 3], 5);
