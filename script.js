function convertToWecs(minutes) {
    return (minutes * 100.0) / 60.0;
}

function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var wecs = convertToWecs(minutes);
    document.getElementById('time').textContent = hours + ':' + wecs.toFixed(2);
}

setInterval(updateTime, 1000);
