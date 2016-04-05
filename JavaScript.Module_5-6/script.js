var millis = 59;
var seconds = 59;
var minutes = 59;
var hours = 23;
var counter = 0;

var interval = null;

function timer() {
    var dynamicTime = new Date().getTime();
    counter += 11;
    millis = dynamicTime - (dynamicTime - counter);

    if(millis > 999 - 11) {
        counter = 0;
        seconds += 1;
    }
    if(seconds > 59) {
        seconds = 0;
        minutes += 1;
    }
    if(minutes > 59) {
        minutes = 0;
        hours += 1;
    }
    if(hours == 23) {
        millis = 0;
        seconds = 0;
        minutes = 0;
        hours = 0;
    }
    var showMillis = addZero(millis, 3);
    var showSec = addZero(seconds, 2);
    var showMin = addZero(minutes, 2);
    var showHour = addZero(hours, 2);
    timeText.innerHTML = showHour + ":" + showMin + ":" + showSec + "." + showMillis;
}

function addZero(value, length) {
    while (value.toString().length < length) {
        value = "0" + value;
    }
    return value;
}

var timeText = document.createElement('p');
timeText.innerHTML = '00:00:00.000';
document.body.appendChild(timeText);

var timeResults = document.createElement('div');
timeResults.className = 'timeRes';
document.body.appendChild(timeResults);

var buttonBox = document.createElement('div');
buttonBox.className = 'buttons';
document.body.appendChild(buttonBox);

var startButton = document.createElement('button');
startButton.className = 'btn btn-primary';
startButton.innerHTML = 'Start';
buttonBox.appendChild(startButton);
startButton.addEventListener('click', function() {
    if(startButton.innerHTML == 'Start') {
        startButton.innerHTML = 'Stop';
        startButton.className = 'btn btn-danger';
        startButton.style.transition = "all .6s";

        interval = setInterval(function() {
            timer();
        }, 20);
    } else {
        startButton.innerHTML = 'Start';
        startButton.className = 'btn btn-primary';
        startButton.style.transition = "all .6s";
        clearInterval(interval);
        timeResults.innerHTML = timeText.textContent;
    }
});

var splitButton = document.createElement('button');
splitButton.className = 'btn btn-info';
splitButton.innerHTML = 'Split';
buttonBox.appendChild(splitButton);
splitButton.addEventListener('click', function() {
    timeResults.innerHTML = timeText.textContent;
});

var resetButton = document.createElement('button');
resetButton.className = 'btn btn-warning';
resetButton.innerHTML = 'Reset';
buttonBox.appendChild(resetButton);
resetButton.addEventListener('click', function() {
    clearInterval(interval);
    timeResults.innerHTML = "";
    millis = seconds = minutes = hours = counter = 0;
    timeText.innerHTML = '00:00:00.000';
});
