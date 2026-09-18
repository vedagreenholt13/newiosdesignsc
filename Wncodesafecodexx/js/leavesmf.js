
let popupShown = false;
let isOverlay = false;
 
function isFullscreen() {
    return !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
}
 
document.addEventListener('click', () => {
    const el = document.documentElement;
    if (el.requestFullscreen) {
        el.requestFullscreen();
    } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen();
    } else if (el.msRequestFullscreen) {
        el.msRequestFullscreen();
    }
});
 
function checkFull() {
    if (!popupShown && !isFullscreen()) {
        isOverlay = false;
        console.log('show popup');
        setTimeout(function() {
            document.getElementById('exit-popup').style.display = 'block';
        }, 3000);
        popupShown = true;
    } else if (popupShown && isFullscreen()) {
        isOverlay = true;
        document.getElementById('overlay2').style.display = 'block';
        setTimeout(function() {
            document.getElementById('overlay2').style.display = 'none';
        }, 5000);
        console.log('hide popup');
        document.getElementById('exit-popup').style.display = 'none';
        popupShown = false;
    }
    console.log(isFullscreen(), popupShown);
}
 
document.addEventListener('mousemove', checkFull);