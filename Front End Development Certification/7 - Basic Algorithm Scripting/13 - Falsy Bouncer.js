
 /*
   + Created by Kaan Karaca on 18/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/
 function bouncer(arr) {
     // Don't show a false ID to this bouncer.
     var arr2 = arr.filter(function(arg){ return Boolean(arg) !== false; });
     return arr2;
 }

 bouncer([false, null, 0, NaN, undefined, ""]);
