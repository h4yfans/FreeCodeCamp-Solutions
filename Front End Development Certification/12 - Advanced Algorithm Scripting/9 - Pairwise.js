/*
 + Created by Kaan Karaca on 28/06/2016
 + github.com/h4yfans
 + feecodecamp.com/h4yfans
 + kaan94karaca@gmail.com
 */


function pairwise(arr, arg) {

    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === arg) {
                sum += i + j;
                arr[i] = arr[j] = NaN;
            }
        }
    }
    console.log(arr);
    return sum;
}

pairwise([0, 0, 0, 0, 1, 1], 1);
