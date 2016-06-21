
 /*
   + Created by Kaan Karaca on 21/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/

 function convertHTML(str) {
     // &colon;&rpar;
     var entities = {
         '&':'&amp;',
         '<':'&lt;',
         '>':'&gt;',
         '\"':'&quot;',
         '\'':"&apos;"
     };

     return str.split("").map(function(entity){
         return entities[entity] || entity;
     }).join("");

 }

 convertHTML("Dolce & Gabbana");


 // Second Way
 function convertHTML(str) {
//Chaining of replace method with different arguments
     str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;");
     return str;
 }
