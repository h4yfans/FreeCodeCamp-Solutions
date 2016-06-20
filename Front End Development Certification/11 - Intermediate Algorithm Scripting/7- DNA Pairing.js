
 /*
   + Created by Kaan Karaca on 20/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/

 function pairElement(str) {
     var strArr = str.split("");
     var result = [];

     for(var i = 0; i<strArr.length;i++){
         if(str[i] == "A"){
             result.push(["A","T"]);
         }else if(str[i] == "T"){
             result.push(["T","A"]);
         }else if(str[i] == "C"){
             result.push(["C","G"]);
         }else{
             result.push(["G","C"]);
         }
     }
     return result;
 }

 pairElement("ATCGA");
