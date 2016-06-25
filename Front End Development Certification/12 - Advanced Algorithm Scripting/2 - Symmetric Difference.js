
 /*
   + Created by Kaan Karaca on 25/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/
 function sym() {
     var args = Array.prototype.slice.call(arguments);


     var getDiff = function(arr1, arr2) {
         function filterFunction(arr1, arr2) {
             return arr1.filter(function(item) {
                 return arr2.indexOf(item) === -1;
             });
         }


         return filterFunction(arr1, arr2)
             .concat(filterFunction(arr2, arr1));
     };

     var symarray = args.reduce(getDiff,[]);

     var unique = symarray.filter(function(val,pos){
         return symarray.indexOf(val) === pos;
     });

     return unique;

 }
 // test here
 sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
 // 3 5 4