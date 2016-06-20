/*
 + Created by Kaan Karaca on 20/06/2016
 + github.com/h4yfans
 + feecodecamp.com/h4yfans
 + kaan94karaca@gmail.com
 */

function convertToRoman(num) {
    var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNumbers = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var roman = "";
    for (var i = 0; i < numbers.length; i++) {
        while (num >= numbers[i]) {
            roman += romanNumbers[i];
            num -= numbers[i];
        }
    }
    return roman;
}

convertToRoman(36);
