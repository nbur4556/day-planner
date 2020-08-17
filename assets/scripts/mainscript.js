$(document).ready(function () {
    const m = moment();

    $('#currentDay').text(m.format('dddd, MMMM Do'));
});