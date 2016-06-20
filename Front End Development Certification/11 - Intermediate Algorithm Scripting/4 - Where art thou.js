
 /*
   + Created by Kaan Karaca on 20/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/

 function whereAreYou(collection, source) {

     var arr =[];
     var keys = Object.keys(source);
     console.log(keys.length);

     return collection.filter(function(obj){
         for(var i = 0; i<keys.length;i++){
             if(!obj.hasOwnProperty(keys[i]) || obj[keys[i]] !== source[keys[i]]){
                 return false;
             }
         }
         return true;
     });
 }

whereAreYou([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
