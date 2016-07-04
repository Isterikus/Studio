// SCROLLMAGIC + JQUERY ANIMATION
(function($) {
    var wh = window.innerHeight;
    var bl1 = document.getElementById("b1");
    var bl2 = document.getElementById("b2");
    var bl3 = document.getElementById("b3");
    var bl4 = document.getElementById("b4");
    var bl5 = document.getElementById("b5");
    var in1 = document.getElementById("in1");
    var in2 = document.getElementById("in2");
    var in3 = document.getElementById("in3");
    var in4 = document.getElementById("in4");
    var in5 = document.getElementById("in5");
    var con1 = document.getElementById("con1");
    var con2 = document.getElementById("con2");
    var con3 = document.getElementById("con3");
    var con4 = document.getElementById("con4");
    var con5 = document.getElementById("con5");
    var logo = document.getElementById("lg");
    var head = document.getElementById("head");

    // Init ScrollMagic
    var ctrl = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });
    var ctrl2 = new ScrollMagic.Controller({
        globalSceneOptions: {
         triggerHook: 'onLeave'
        }
    });
    //HIDE LOGO
    var scene0 = new ScrollMagic.Scene({
        triggerElement: '.trigger1',
        duration: wh * 10
    })
    .setClassToggle('#lg', 'hide')
    .addTo(ctrl);

    //POSITION FIXED/UNFIXED
    var scene1 = new ScrollMagic.Scene({
        triggerElement: '.trigger1',
        duration: wh * 2.4
    })
    .setPin('#b1')
    .addTo(ctrl);

    var scene2 = new ScrollMagic.Scene({
        triggerElement: '.trigger1',
        duration: wh * 2.4
    })
    .setPin('#b2')
    .addTo(ctrl);

    var scene3 = new ScrollMagic.Scene({
        triggerElement: '.trigger1',
        duration: wh * 2.4
    })
    .setPin('#b3')
    .addTo(ctrl);

    var scene4 = new ScrollMagic.Scene({
        triggerElement: '.trigger1',
        duration: wh * 2.4
    })
    .setPin('#b4')
    .addTo(ctrl);

    var scene5 = new ScrollMagic.Scene({
        triggerElement: '.trigger1',
        duration: wh * 2.4
    })
    .setPin('#b5')
    .addTo(ctrl);

    //APPEARANCE

    var scene111 = new ScrollMagic.Scene({
        triggerElement: '.trigger5',
        duration: wh * 2.4
    })
    .on("enter", function () {
        con1.style.top = "0vh";
        con1.style.opacity = "1";
    })
    .on("leave", function () {
        con1.style.top = "-40vh";
        con1.style.opacity = "0";
    })
    // .addIndicators({name: "1 - change inline style"})
    .addTo(ctrl);

    var scene6 = new ScrollMagic.Scene({
        triggerElement: '.trigger4',
        duration: wh * 2.4
    })
    .on("enter", function () {
        con2.style.top = "0vh";
        con2.style.opacity = "1";
    })
    .on("leave", function () {
        con2.style.top = "-60vh";
        con2.style.opacity = "0";
    })
    .addTo(ctrl);

    var scene7 = new ScrollMagic.Scene({
        triggerElement: '.trigger3',
        duration: wh * 2.4
    })
    .on("enter", function () {
        con3.style.top = "0vh";
        con3.style.opacity = "1";
    })
    .on("leave", function () {
        con3.style.top = "-80vh";
        con3.style.opacity = "0";
    })
    .addTo(ctrl);

    var scene8 = new ScrollMagic.Scene({
        triggerElement: '.trigger2',
        duration: wh * 2.4
    })
    .on("enter", function () {
        con4.style.top = "0vh";
        con4.style.opacity = "1";
    })
    .on("leave", function () {
        con4.style.top = "-100vh";
        con4.style.opacity = "0";
    })
    .addTo(ctrl);

    var scene9 = new ScrollMagic.Scene({
        triggerElement: '.trigger1',
        duration: wh * 2.4
    })
    .on("enter", function () {
        con5.style.top = "0vh";
        con5.style.opacity = "1";
    })
    .on("leave", function () {
        con5.style.top = "-120vh";
        con5.style.opacity = "0";
    })
    .addTo(ctrl);

    //END OF ANIMATION

    // var scene00 = new ScrollMagic.Scene({
    //     triggerElement: '.section3',
    //     duration: wh * 10
    // })
    // .on("enter", function() {
    //     head.style.position = "static"
    // })
    // .on("leave", function() {
    //     head.style.position = "fixed"
    // })
    // .addIndicators({name: "2 - change IMAGE"})
    // .addTo(ctrl2);

    var scene11 = new ScrollMagic.Scene({
        triggerElement: '.section3',
        duration: 150
    })
    .setClassToggle("#con1", "rotate")
    .addTo(ctrl2);

    var scene22 = new ScrollMagic.Scene({
        triggerElement: '.section3',
        duration: 150
    })
    .setClassToggle("#con2", "rotate")
    .addTo(ctrl2);

    var scene33 = new ScrollMagic.Scene({
        triggerElement: '.section3',
        duration: 150
    })
    .setClassToggle("#con3", "rotate")
    .addTo(ctrl2);

    var scene44 = new ScrollMagic.Scene({
        triggerElement: '.section3',
        duration: 150
    })
    .setClassToggle("#con4", "rotate")
    .addTo(ctrl2);

    var scene55 = new ScrollMagic.Scene({
        triggerElement: '.section3',
        duration: 150
    })
    .setClassToggle("#con5", "rotate")
    .addTo(ctrl2);

    var scene66 = new ScrollMagic.Scene({
        triggerElement: '.section3',
        duration: 150
    })
    .setClassToggle("#in1", "rotate3")
    .addTo(ctrl2);

    var scene77 = new ScrollMagic.Scene({
        triggerElement: '.section3',
        duration: 150
    })
    .setClassToggle("#in2", "rotate3")
    .addTo(ctrl2);

    var scene88 = new ScrollMagic.Scene({
        triggerElement: '.section3',
        duration: 150
    })
    .setClassToggle("#in3", "rotate3")
    .addTo(ctrl2);

    var scene99 = new ScrollMagic.Scene({
        triggerElement: '.section3',
        duration: 150
    })
    .setClassToggle("#in4", "rotate3")
    .addTo(ctrl2);

    var scene100 = new ScrollMagic.Scene({
        triggerElement: '.section3',
        duration: 150
    })
    .setClassToggle("#in5", "rotate3")
    .addTo(ctrl2);

}) (jQuery);