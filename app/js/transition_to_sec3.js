(function($) {
	var tr1 = document.getElementById('tr1');
	var tr2 = document.getElementById('tr2');

	//CALCULATING HEIGHT OF BLOCKS


	//Init Scroll Magic
	var ctrl = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onLeave'
		}
	});

	var scene1 = new ScrollMagic.Scene({
        triggerElement: '.trigger_skew',
        duration: 700
    })
    .setClassToggle("#tr1", "skew")
    .addIndicators({name: "2 - change skew"})
    .addTo(ctrl);

    var scene2 = new ScrollMagic.Scene({
        triggerElement: '.trigger_skew',
        duration: 700
    })
    .setClassToggle("#tr2", "skew")
    .addTo(ctrl);

    var scene3 = new ScrollMagic.Scene({
        triggerElement: '.trigger_skew',
        duration: 700
    })
    .setClassToggle(".projects", "opacity")
    .addTo(ctrl);

    // var scene4 = new ScrollMagic.Scene({
    //     triggerElement: '.trigger_skew',
    //     duration: 700
    // })
    // .setPin(".project1")
    // .addTo(ctrl);

    // var scene4 = new ScrollMagic.Scene({
    //     triggerElement: '.trigger_skew',
    //     duration: 700
    // })
    // .setPin(".project2")
    // .addTo(ctrl);

}) (jQuery);