clickCounter = 0;
clickCounterAvatar = 0;
function checkClicks() {
    clickCounter++;
    document.getElementById('virus').style.width = (15 + clickCounter) + '%';
    if (clickCounter > 10) {
        $('#coffinDanceModal').modal('toggle');
        clickCounter = 0;
        document.getElementById('virus').style.width = (15 + clickCounter) + '%';
    }
}
function checkClicksAvatar() {
    clickCounterAvatar++;
    if (clickCounterAvatar > 10) {
        document.getElementById('avatar').setAttribute('src', 'data/avatarALT.jpg');
    }
    if (clickCounterAvatar > 20) {
        document.getElementById('avatar').setAttribute('src', 'data/avatarALT2.jpg');
    }
    if (clickCounterAvatar > 30) {
        document.getElementById('avatar').setAttribute('src', 'data/avatar.jpg');
        clickCounterAvatar = 0;
    }
}