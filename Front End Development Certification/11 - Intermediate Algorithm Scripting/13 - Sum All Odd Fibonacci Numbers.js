
 /*
   + Created by Kaan Karaca on 22/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/


 function sumFibs(num) {

     var arrFib = [1];
     for (var i = 1; i <=num;) {
         arrFib.push(i);
         console.log(i);
         i = arrFib[arrFib.length - 1] + arrFib[arrFib.length - 2];
     }

     return arrFib.reduce(function(prev,current){
         if(current%2==1){
             return prev + current;
         }else{
             return prev;
         }
     });
 }

 sumFibs(1000);
