$(document).ready(function () {
    const m = moment();
    const timeBlocks = $('.timeblock');
    const timeBlockButtons = $('.timeblock button');

    blockPastTimes();

    //Show current day to string
    $('#currentDay').text(m.format('dddd, MMMM Do'));

    //Save Button Click Event
    timeBlockButtons.click(saveSchedule);

    //Disable all time blocks earlier than the current moment object
    function blockPastTimes() {
        let timeBlockInputs = $('.timeblock input');

        for (let i = 0; i < timeBlockInputs.length; i++) {

            if (timeBlocks[i].getAttribute('data-time') < m.hour()) {
                timeBlockInputs[i].setAttribute('disabled', 'disabled');
                timeBlockButtons[i].setAttribute('disabled', 'disabled');
            }
            else if (timeBlocks[i].getAttribute('data-time') == m.hour()) {
                timeBlockInputs[i].setAttribute('style', 'background-color: yellow');
            }
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