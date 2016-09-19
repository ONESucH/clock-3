var container = $('.container'),
    newDate = new Date(),
    seconds = newDate.getSeconds(),
    minutes = newDate.getMinutes(),
    hours = newDate.getHours();

assemblyHours();

function assemblyHours() {
    var secondsPointer = document.createElement('div'),
        minutesPointer = document.createElement('div'),
        hoursPointer = document.createElement('div');

    secondsPointer.className = 'secondsPointer';
    minutesPointer.className = 'minutesPointer';
    hoursPointer.className = 'hoursPointer';

    container.append(secondsPointer, minutesPointer, hoursPointer);
}