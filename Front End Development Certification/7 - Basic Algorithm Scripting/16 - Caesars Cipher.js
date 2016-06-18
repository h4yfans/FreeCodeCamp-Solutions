
 /*
   + Created by Kaan Karaca on 18/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/
 function rot13(str) { // LBH QVQ VG!

     var codeA = "A".charCodeAt(0);
     var codeN = "N".charCodeAt(0);
     var codeZ = "Z".charCodeAt(0);
     var newArr = [];

     for(var i =0; i<str.length; i++){
         var code = str.charCodeAt(i);
         if(code>=codeA && code<=codeZ){
             if(code>=codeN)
                 newArr.push(String.fromCharCode(code-13));
             else
                 newArr.push(String.fromCharCode(code+13));
         }else{
             newArr.push(str[i]);
         }
     }
     return newArr.join("");
 }
