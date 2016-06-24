/*
 + Created by Kaan Karaca on 25/06/2016
 + github.com/h4yfans
 + feecodecamp.com/h4yfans
 + kaan94karaca@gmail.com
 */

function telephoneCheck(str) {
    // Good luck!
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

    return regex.test(str);
}


telephoneCheck("555-555-5555");
