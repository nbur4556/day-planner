$(document).ready(function () {
    const m = moment();

    blockPastTimes();

    //Show current day to string
    $('#currentDay').text(m.format('dddd, MMMM Do'));

    //Save Button Click Event
    $('.timeblock button').click(saveSchedule);

    //Disable all time blocks earlier than the current moment object
    function blockPastTimes() {
        let timeBlockInputs = $('.timeblock input');

        for (let i = 0; i < timeBlockInputs.length; i++) {
            timeBlockInputs[i].setAttribute('disabled', '');
        }
    }

    //Save schedule to local storage
    function saveSchedule() {
        console.log("Save Schedule");
    }

    //Load schedule from local storage
    function loadSchedule() {

    }
});