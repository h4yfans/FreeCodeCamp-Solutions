
 /*
   + Created by Kaan Karaca on 23/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/

 function addTogether() {


     var args=  new Array(arguments.length);

     for(var i = 0; i< args.length; ++i){
         args[i] = arguments[i];
     }


     if(args.length == 2){
         if(typeof args[0] !== 'number' || typeof args[1] !== 'number'){
             return undefined;
         }
         return args[0] + args[1];
     }


     if(args.length == 1){
         a = args[0];
         if(typeof a !== 'number'){
             return undefined;
         }else{
             return function(b){
                 if(typeof b !== 'number'){
                     return undefined;
                 }else{
                     return a + b;
                 }
             };
         }
     }


 }

 addTogether(3,"f");