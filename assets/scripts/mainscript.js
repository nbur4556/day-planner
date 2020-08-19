$(document).ready(function () {
    const m = moment();
    const timeBlocks = $('.timeblock');
    const timeBlockInputs = $('.timeblock input');
    const timeBlockButtons = $('.timeblock button');

    let fullSchedule = new Array(24);

    loadSchedule();
    blockPastTimes();

    //Show current day to string
    $('#currentDay').text(m.format('dddd, MMMM Do'));

    //Save Button Click Event
    timeBlockButtons.click(saveSchedule);

    //Disable all time blocks earlier than the current moment object
    function blockPastTimes() {
        let previousColor = '#575366';
        let currentColor = '#5762D5';
        let upcomingColor = '#ECE8EF';
        let lightTextColor = '#ECE8EF';

        for (let i = 0; i < timeBlockInputs.length; i++) {
            if (timeBlocks.eq(i).attr('data-time') < m.hour()) {
                //Disable text inputs and buttons before current time
                timeBlockInputs.eq(i).css('background-color', previousColor);
                timeBlockInputs.eq(i).css('color', lightTextColor);
                timeBlockInputs.eq(i).attr('disabled');
                timeBlockButtons.eq(i).attr('disabled');
            }
            else if (timeBlocks.eq(i).attr('data-time') == m.hour()) {
                //Color code current time
                timeBlockInputs.eq(i).css('background-color', currentColor);
                timeBlockInputs.eq(i).css('color', lightTextColor);
            }
            else {
                timeBlockInputs.eq(i).css('background-color', upcomingColor);
            }
        }
    }

    //Save schedule to local storage
    function saveSchedule(e) {
        let selectedTimeblock = $(e.target).closest('.timeblock');

        //Add selected time block input to full schedule array and save to local storage
        fullSchedule[selectedTimeblock.attr('data-time')] = selectedTimeblock.children()[1].value;
        localStorage.setItem('full-schedule', JSON.stringify(fullSchedule));
    }

    //Load schedule from local storage
    function loadSchedule() {
        //If schedule is saved in local storage, set it equal to fullSchedule array
        if (localStorage.getItem('full-schedule') != null) {
            fullSchedule = JSON.parse(localStorage.getItem('full-schedule'))
        }

        //Write full schedule array to all time block inputs
        for (let i = 0; i < fullSchedule.length; i++) {
            if (fullSchedule[i] != undefined) {
                timeBlockInputs.eq(i).val(fullSchedule[i]);
            }
            else {
                timeBlockInputs.eq(i).val('');
            }
        }
    }
});