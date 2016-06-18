
 /*
   + Created by Kaan Karaca on 18/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/
 var Car = function() {
     this.wheels = 4;
 };

 // Only change code below this line.
 var myCar = new Car();
 myCar.engines = 1;
 myCar.nickname = "Car!";

 // Only change code above this line.
 (function() {return JSON.stringify(myCar);})();
