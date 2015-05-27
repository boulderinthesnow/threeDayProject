// touch t (84) box appears on the screen, centered
// play a sound effect


  $("body").keypress(function(event){
  	console.log(event.which)
  	    // if (e.keyCode == 37) { 
       // getElementById('sound1').play()
       // return false;
  	// if ($(".exactCenter").hasClass("animation-target")) {

  	// }

  	//
$//("#true-center").addClass("load");​
  	delayAnimate(".exactCenter","animation-spin-right",250,"#clap" )
  	//dd$(".exactCenter").toggleClass("animation-target")
  	//$(".exactCenter").addClass("animation-target")
  })

  function delayAnimate(targetObj,animateClasses,delay,sound) {
  	
  	//$(targetObj).addClass("load");​
  	$(targetObj).toggleClass(animateClasses)
  	// $(targetObj)

  	$(sound)[0].play();
  	window.setTimeout(function(x){
  		$(targetObj).removeClass(animateClasses)
		}
  		,delay )
  
  }  
  // function delayAnimate(targetObj,animateClasses,delay) {
  // 	$(".exactCenter").toggleClass("animation-target")
  // 	window.setTimeout(function(x){
  // 		$(".exactCenter").removeClass("animation-target")
		// }
  // 		,250 )
  
  // }