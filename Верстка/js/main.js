var leftOffset = -300;
var traffic = function() {
    $('#face').offset({ left: leftOffset });
    leftOffset++;
    if (leftOffset > 1600) {
        leftOffset = -300;
    }
}
setInterval(traffic, 10);