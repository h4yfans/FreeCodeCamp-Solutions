/*
 + Created by Kaan Karaca on 27/06/2016
 + github.com/h4yfans
 + feecodecamp.com/h4yfans
 + kaan94karaca@gmail.com
 */

function orbitalPeriod(arr) {

    // delete arr[0].avgAlt;
    // arr.push({avgAlt : 34345345})

    var currentAvgAlt = 0;
    var result;
    var length = arr.length;

    for (var i = 0; i < length; i++) {
        currentAvgAlt = arr[i].avgAlt;
        result = Math.ceil(Math.round(2 * Math.PI *(Math.sqrt(Math.pow(6367.4447 + currentAvgAlt, 3) / 398600.4418))));
        delete arr[i].avgAlt;

        arr[i].orbitalPeriod = result;

    }


    return arr;


}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
