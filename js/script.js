var date = dayjs().format('MMM D, YYYY');
$('#date').text(date);

function currentTime() {
    setInterval(function () {
        var time = dayjs().format('hh:mm:ss');
        $('#time').text(time);
    }, 1)
}

var myModal = $('myModal');
var myInput = $('myInput');

currentTime();