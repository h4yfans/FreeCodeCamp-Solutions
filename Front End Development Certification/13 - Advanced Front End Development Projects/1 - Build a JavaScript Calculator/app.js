/*
 + Created by Kaan Karaca on 28/06/2016
 + github.com/h4yfans
 + feecodecamp.com/h4yfans
 + kaan94karaca@gmail.com
 */
$(document).ready(function () {
    var display = $("#display");
    var math = $("#math");
    var numbers = "";
    var aboveResult = "";
    var temp = "";
    var decimal = false;


    display.text("0");

    // this function works like delete button
    $("#clearAll").click(function () {
        display.text(0);
        numbers = "";
        math.text("");
        aboveResult = "";
        decimal=false;
    });

    // assume that you're pressing backspace
    $("#clearBackSpace").click(function () {

        numbers = numbers.substring(0, numbers.length - 1);
        display.text(numbers);

    });

    // add the clicked number to display
    $(".numbers").click(function () {

        if (numbers.length > 10) return;

        numbers += $(this).text();
        display.text(numbers);
    });

    // operator(s) you clicked will be added to aboveResult
    $(".operators").click(function () {
        if (aboveResult.length > 40) return;
        if (numbers !== "") {
            aboveResult += " " + numbers + " " + $(this).text();


            math.text(aboveResult);
            temp = numbers;
            numbers = "";
            decimal=false;

        }
    });


    $("#equals").click(function () {
        aboveResult += " " + numbers;
        math.text(aboveResult);
        doTheMath();
    });


    $("#decimal").click(function () {
        if(decimal){
            return;
        }else{
            numbers += ".";
            decimal=true;
            display.text(numbers);
        }
    });

    var doTheMath = function () {
        // while using regex this provides us get rid of the symbols
        aboveResult = aboveResult.replace(/×/g, '*').replace(/÷/g, '/').replace(/\s/g, "");

        var first = aboveResult.substring(0, aboveResult.length - 1);
        var last = aboveResult.substring(aboveResult.length - 1);


        // check if last character sign or not. besides could get error.
        // because if last character is "-". "2+3+4-" won't work. as you can see function won't understand
        // last character.
        if (last == "×" || last == "÷" || last == "+" || last == "-") {
            aboveResult = first;
        }
        aboveResult = eval(aboveResult);
        display.text(aboveResult);
    };



});