//import { clearTimeout } from "timers";

/*function timeCounter(time) {
    setTimeout(function() {
        console.log('Hello World');
    }, time);
}

timeCounter(5000);*/

//this is a timer that runs an amount of time for each item passed

var t = 0;
var activityTimeOut;
var timeElapsed = 0;
var timer_is_on = 0;

// time counter, with timeOut step time
function timedCount(activityTimeOut) {
    t = setTimeout(function(){ timedCount(activityTimeOut); }, 1000);
    timeElapsed = timeElapsed + 1;
    console.log('activity time out: ' + activityTimeOut);
    console.log('time elapsed: ' + timeElapsed);
    if(timeElapsed === activityTimeOut) {
        stopCount();
    }
}

function startCount(timeOut) {
    if(!timer_is_on) {
        timer_is_on = 1;
        timedCount(timeOut);
    }
}

function stopCount() {
    clearTimeout(t);
    console.log('The timer has finished');
    timeElapsed = 0;
    timer_is_on = 0;
}