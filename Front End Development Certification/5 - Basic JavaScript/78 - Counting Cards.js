
 /*
   + Created by Kaan Karaca on 18/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/

 var count = 0;

 function cc(card) {
     // Only change code below this line
     switch(card) {
         case 2:
         case 3:
         case 4:
         case 5:
         case 6:
             count++;
             break;
         case 7:
         case 8:
         case 9:
             break;
         case 10:
         case 'J':
         case 'Q':
         case 'K':
         case 'A':
             count--;
     }

     if (count > 0) {
         return count + " Bet";
     }
     else {
         return count + " Hold";
     }
     // Only change code above this line
 }

 // Add/remove calls to test your function.
 // Note: Only the last will display
 cc(2); cc(3); cc(7); cc('K'); cc('A');
