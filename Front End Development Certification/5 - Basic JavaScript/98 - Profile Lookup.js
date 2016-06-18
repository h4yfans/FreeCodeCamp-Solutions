
 /*
   + Created by Kaan Karaca on 18/06/2016
   + github.com/h4yfans
   + feecodecamp.com/h4yfans
   + kaan94karaca@gmail.com
*/

 //Setup
 var contacts = [
     {
         "firstName": "Akira",
         "lastName": "Laine",
         "number": "0543236543",
         "likes": ["Pizza", "Coding", "Brownie Points"]
     },
     {
         "firstName": "Harry",
         "lastName": "Potter",
         "number": "0994372684",
         "likes": ["Hogwarts", "Magic", "Hagrid"]
     },
     {
         "firstName": "Sherlock",
         "lastName": "Holmes",
         "number": "0487345643",
         "likes": ["Intriguing Cases", "Violin"]
     },
     {
         "firstName": "Kristian",
         "lastName": "Vos",
         "number": "unknown",
         "likes": ["Javascript", "Gaming", "Foxes"]
     }
 ];


 function lookUpProfile(firstName, prop){
     for(var i = 0; i < contacts.length; i++){
         var contact = contacts[i];
         if(contact.firstName === firstName){
             if( contact.hasOwnProperty(prop)){
                 return contact[prop];}

             return "No such property";
         }
     }
     return "No such contact";
 }



 // Change these values to test your function
 lookUpProfile("Akira", "likes");
