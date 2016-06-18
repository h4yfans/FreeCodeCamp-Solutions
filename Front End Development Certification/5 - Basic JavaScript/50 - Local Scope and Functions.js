
 /*
   + Created by Kaan Karaca on 18/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/

 function myLocalScope() {
     'use strict';
     var myVar = "foo";

     console.log(myVar);
 }

 myLocalScope();

 // Run and check the console
 // myVar is not defined outside of myLocalScope


 // Now remove the console log line to pass the test

