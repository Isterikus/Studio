(function($) {
    var wh = window.innerHeight;
    var bl1 = document.getElementById("b1");
    var bl2 = document.getElementById("b2");
    var bl3 = document.getElementById("b3");
    var bl4 = document.getElementById("b4");
    var bl5 = document.getElementById("b5");

    var af1 = document.getElementById("after-1");
    var af2 = document.getElementById("after-2");
    var af3 = document.getElementById("after-3");
    var af4 = document.getElementById("after-4");
    var af5 = document.getElementById("after-5");

    // Init ScrollMagic
    var ctrl = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });
 
    //POSITION FIXED/UNFIXED
    var scene1 = new ScrollMagic.Scene({
        triggerElement: '.trigger1',
        duration: wh
    })
    .setPin('#b1')
    .on("enter", function () {
        bl1.style.top = "0vh";
        bl1.style.opacity = "1";
    })
    .on("leave", function () {
        bl1.style.top = "-20vh";
        bl1.style.opacity = "0";
    })
    .addIndicators({name: "1 - change inline style"})
    .addTo(ctrl);

    // .addIndicators({name: "1 - change inline style"})

    var scene2 = new ScrollMagic.Scene({
        triggerElement: '.trigger1',
        duration: wh
    })
    .setPin('#b2')
    .addTo(ctrl);

    var scene3 = new ScrollMagic.Scene({
        triggerElement: '.trigger1',
        duration: wh
    })
    .setPin('#b3')
    .addTo(ctrl);

    var scene4 = new ScrollMagic.Scene({
        triggerElement: '.trigger1',
        duration: wh
    })
    .setPin('#b4')
    .addTo(ctrl);

    var scene5 = new ScrollMagic.Scene({
        triggerElement: '.trigger1',
        duration: wh
    })
    .setPin('#b5')
    .addTo(ctrl);

    //APPEARANCE

    var scene6 = new ScrollMagic.Scene({
        triggerElement: '.trigger2',
        duration: wh
    })
    .on("enter", function () {
        bl2.style.top = "20vh";
        bl2.style.opacity = "1";
    })
    .on("leave", function () {
        bl2.style.top = "0vh";
        bl2.style.opacity = "0";
    })
    .addTo(ctrl);

    var scene7 = new ScrollMagic.Scene({
        triggerElement: '.trigger3',
        duration: wh
    })
    .on("enter", function () {
        bl3.style.top = "40vh";
        bl3.style.opacity = "1";
    })
    .on("leave", function () {
        bl3.style.top = "20vh";
        bl3.style.opacity = "0";
    })
    .addTo(ctrl);

    var scene8 = new ScrollMagic.Scene({
        triggerElement: '.trigger4',
        duration: wh
    })
    .on("enter", function () {
        bl4.style.top = "60vh";
        bl4.style.opacity = "1";
    })
    .on("leave", function () {
        bl4.style.top = "40vh";
        bl4.style.opacity = "0";
    })
    .addTo(ctrl);

    var scene9 = new ScrollMagic.Scene({
        triggerElement: '.trigger5',
        duration: wh
    })
    .on("enter", function () {
        bl5.style.top = "80vh";
        bl5.style.opacity = "1";
    })
    .on("leave", function () {
        bl5.style.top = "60vh";
        bl5.style.opacity = "0";
    })
    .addTo(ctrl);
}) (jQuery);