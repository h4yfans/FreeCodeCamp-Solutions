
 /*
   + Created by Kaan Karaca on 26/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/

 function updateInventory(arr1, arr2) {

     var newArr = arr1.concat(arr2);
     console.log(newArr);


     for(var i = 0; i<newArr.length; i++){
         for(var j = i+1; j<newArr.length; j++){
             if(newArr[i][1] === newArr[j][1]){
                 newArr[i][0] += newArr[j][0];
                 var index = newArr.indexOf(newArr[j]);
                 newArr.splice(index,1);
             }
         }
     }

     return newArr.sort(function(a,b){
         return a[1] > b[1] ? 1 : -1;
     });

 }

 var curInv = [
     [21, "Bowling Ball"],
     [2, "Dirty Sock"],
     [1, "Hair Pin"],
     [5, "Microphone"]
 ];

 var newInv = [
     [2, "Hair Pin"],
     [3, "Half-Eaten Apple"],
     [67, "Bowling Ball"],
     [7, "Toothpaste"]
 ];

 updateInventory(curInv, newInv);


