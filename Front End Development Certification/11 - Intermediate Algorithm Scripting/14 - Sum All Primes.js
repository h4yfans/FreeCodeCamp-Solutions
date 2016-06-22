
 /*
   + Created by Kaan Karaca on 22/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/

 function sumPrimes(num) {


     function isPrime(number){
         for (i = 2; i < number; i++){
             if(number % i === 0 && number!= i){
                 return false;
             }
         }
         return true;
     }


     if(num===1){
         return 0;
     }
     if(isPrime(num)===false){
         return sumPrimes(num-1);
     }

     if(isPrime(num)===true){
         return num + sumPrimes(num-1);
     }


 }

 sumPrimes(10);
