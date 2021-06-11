"use strict";

const hoverables = document.querySelectorAll('.hoverable');
for (let i = 0; i < hoverables.length; i++) {
    hoverables[i].addEventListener('mouseenter',
        () => document.querySelector('#circle').style.transform = 'scale(2.5) translate(-25%, -25%)');

    hoverables[i].addEventListener('mouseleave',
        () => document.querySelector('#circle').style.transform = 'scale(1) translate(-50%, -50%)');
}

$(document).ready(function() {
    let mouseX = 0, mouseY = 0;
    let xp = 0, yp = 0;

    $(document).mousemove(function(e){
        mouseX = e.pageX;
        mouseY = e.pageY;
        $("#cursor").css({left: mouseX +'px', top: mouseY +'px'});
    });

    setInterval(function(){
        xp += ((mouseX - xp) / 6);
        yp += ((mouseY - yp) / 6);
        $("#circle").css({left: xp +'px', top: yp +'px'});
    },20);
});