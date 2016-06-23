/*
 + Created by Kaan Karaca on 23/06/2016
 + github.com/h4yfans
 + feecodecamp.com/h4yfans
 + kaan94karaca@gmail.com
 */


function binaryAgent(str) {

    var sum = 0;
    var p = 7;
    str = str.split(" ");
    var newStr = "";

    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < 8; j++) {
            sum += parseInt(str[i][j]) * Math.pow(2, p);
            p--;
        }
        newStr += String.fromCharCode(sum);
        sum = 0;
        p = 7;

    }


    return newStr;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
