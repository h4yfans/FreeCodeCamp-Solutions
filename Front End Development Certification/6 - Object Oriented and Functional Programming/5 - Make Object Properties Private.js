
 /*
   + Created by Kaan Karaca on 18/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/

 var Car = function() {
     // this is a private variable
     var speed = 10;

     // these are public methods
     this.accelerate = function(change) {
         speed += change;
     };

     this.decelerate = function() {
         speed -= 5;
     };

     this.getSpeed = function() {
         return speed;
     };
 };

 var Bike = function() {

     // Only change code below this line.
     var gear =2;

     this.setGear = function(setGear){
         gear=setGear;
     };

     this.getGear = function(){
         return gear;
     };

 };

 var myCar = new Car();

 var myBike = new Bike();
