
 /*
   + Created by Kaan Karaca on 18/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/
 function golfScore(par, strokes) {
     // Only change code below this line
     if(strokes===1)return "Hole-in-one!";
     else if (strokes <= par-2) return "Eagle";
     else if (strokes <= par-1) return "Birdie";
     else if (strokes <= par) return "Par";
     else if (strokes <= par+1) return "Bogey";
     else if (strokes <= par+2) return "Double Bogey";
     else return "Go Home!";


     // Only change code above this line
 }

 // Change these values to test
 golfScore(4, 1);
