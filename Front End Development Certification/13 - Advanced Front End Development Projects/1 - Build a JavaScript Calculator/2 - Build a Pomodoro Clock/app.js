/*jshint globals: true, plusplus: false, strict: false, browser: true, node: true, jquery: true*/
/*global $*/
/*
 + Created by Kaan Karaca on 30/06/2016
 + github.com/h4yfans
 + feecodecamp.com/h4yfans
 + kaan94karaca@gmail.com
 */

$(document).ready(function () {
    "use strict";
    // tomato timer
    var timer = $("#timer");
    var currentTime = 0;
    var countdown = 0;
    var setIntervalID;
    var count = 0;
    var $tomatoDiv = $(".tomato div");
    // break
    var breakCounter = 5;
    var breakNumber = $(".breakNumber");
    // session
    var sessionCounter = 25;
    var sessionNumber = $(".sessionNumber");
    // boolean values
    var isPause = false;
    var isBreak = false;
    var pauseFlag = false;


    // change value of break section
    // decrease the break value
    $('#breakMinus').click(function () {
        if (breakCounter > 1) {
            breakCounter--;
        }
        breakNumber.text(breakCounter);
    });
    // increase the break value
    $('#breakPlus').click(function () {
        breakNumber.text(++breakCounter);
    });


    //change value of session section
    // decrease the  session value
    $('#sessionMinus').click(function () {
        if (sessionCounter > 1) {
            sessionCounter--;
        }
        sessionNumber.text(sessionCounter);
        timer.text(sessionCounter + ":00");

    });

    // increase the session value
    $("#sessionPlus").click(function () {
        sessionNumber.text(++sessionCounter);
        timer.text(sessionCounter + ":00");
    });


    $(".tomato").click(function () {
        if (isPause && pauseFlag) {
            colorOn();
            startTimer(countdown, timer);
            pauseFlag = false;
        } else if (isPause) {
            pauseOn();
            pauseTimer();
        } else {
            colorOn();
            countdown = !isBreak ? sessionCounter * 60 : breakCounter * 60;
            console.log("eksi" + countdown);
            startTimer(countdown, timer);

        }
    });



    function startTimer(duration, display) {

        var timer = duration,
            minutes, seconds;

        setIntervalID = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.text(minutes + ":" + seconds);
            --timer;
            currentTime = timer;
            isPause = true;

            console.log(currentTime);

            if (timer < 0) {
                console.log("eksi");
                count++;
                isBreak = true;
                timer = breakCounter * 60;
                if (count == 2) {
                    pauseTimer();
                    pauseFlag = false;
                    isPause = false;
                    isBreak = false;
                    clearInterval(setIntervalID);

                }



            }
        }, 1000);
    }

    function pauseTimer() {
        countdown = currentTime;
        clearInterval(setIntervalID);
        pauseFlag = true;
        // NOT DEFINED
    }

    function colorOn() {
        $tomatoDiv.css("border", "8px dotted white");
    }

    function pauseOn() {
        $tomatoDiv.css("border", "8px dotted #FBBC05");
    }

});