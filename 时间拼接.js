var timer = null;
function tmp() {
    var now = new Date().getTime();
    var end = new Date(time).getTime();
    var chaizhi = (end - now) / 1000;
    var day = parseInt(chaizhi / (60 * 60 * 24));
    var hour = parseInt(chaizhi / 3600 % 24);
    var min = parseInt(chaizhi / 60 % 60);
    var sec = parseInt(chaizhi % 60);
    sec = (sec > 9 ? sec : "0" + sec);
    if (chaizhi > 0) {
        console.log(day, '-', hour, '-', min, '-', sec);
    } else {
        console.log(123);
        clearInterval(timer);
    }
}

function lasttime(time) {
    timer = setInterval(tmp, 1000);
}
var time = new Date(2017, 2, 17, 13, 9, 59);
lasttime(time)