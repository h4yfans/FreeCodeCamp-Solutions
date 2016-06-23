/*
 + Created by Kaan Karaca on 23/06/2016
 + github.com/h4yfans
 + feecodecamp.com/h4yfans
 + kaan94karaca@gmail.com
 */


function truthCheck(collection, pre) {
    // Is everyone being true?
    return collection.every(function (val) {
        return val.hasOwnProperty(pre) && Boolean(val[pre]);

    });

}


truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {
    "user": "Laa-Laa",
    "sex": "female"
}, {"user": "Po", "sex": "female"}], "sex");