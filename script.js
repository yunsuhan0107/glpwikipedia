var ddaytimer = setInterval (dayGap, 1000)
function dayGap () {
    var dday = new Date("February 4, 2021 00:00:00").getTime();
    var nowday = new Date();
    nowday = nowday.getTime();
    var distance = dday - nowday;

    var d = Math.floor(distance / (1000 * 60 * 60 * 24));

    var h = Math.floor((distance / (1000*60*60)) % 24);
    var m = Math.floor((distance / (1000*60)) % 60);
    var s = Math.floor((distance / 1000) % 60);

    if (distance <= 0) {
        document.getElementById("dday-timer").innerHTML = "D-day";
    } else {
        document.getElementById("time-day").innerHTML = "D-" + d + " Until Graduation";
        document.getElementById("time-hour").innerHTML = h;
        document.getElementById("time-minute").innerHTML = m;
        document.getElementById("time-second").innerHTML = s;
    }
}
