$(document).ready(function () {
    const m = moment();
    const timeBlocks = $('.timeblock');
    const timeBlockInputs = $('.timeblock input');
    const timeBlockButtons = $('.timeblock button');

    loadSchedule();
    blockPastTimes();

    //Show current day to string
    $('#currentDay').text(m.format('dddd, MMMM Do'));

    //Save Button Click Event
    timeBlockButtons.click(saveSchedule);

    //Disable all time blocks earlier than the current moment object
    function blockPastTimes() {
        for (let i = 0; i < timeBlockInputs.length; i++) {
            if (timeBlocks.eq(i).attr('data-time') < m.hour()) {
                //Disable text inputs and buttons before current time
                timeBlockInputs.eq(i).css('background-color', 'grey');
                timeBlockInputs.eq(i).attr('disabled');
                timeBlockButtons.eq(i).attr('disabled');
            }
            else if (timeBlocks.eq(i).attr('data-time') == m.hour()) {
                //Color code current time
                timeBlockInputs.eq(i).css('background-color', 'cyan');
            }
        }
    }

    //Save schedule to local storage
    function saveSchedule() {
        console.log('Save Schedule');
    }

    //Load schedule from local storage
    function loadSchedule() {
        console.log('Load Schedule');
    }
});