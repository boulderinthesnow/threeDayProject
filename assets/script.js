// touch t (84) box appears on the screen, centered
// play a sound effect


  $("body").keypress(function(event){
  	//console.log(event.which)
  	$("body").append('<div class= "_' + event.which + '" ></div>')

	 if (event.which === 116) {
  	delayAnimate("._116","animation-spin-right exactCenter",250,"#clap" )
  	}
  })

  function delayAnimate(targetObj,animateClasses,delay,sound) {
  	console.log('<div class="_' + event.which + '" ></div>')
  	$(targetObj).addClass(animateClasses)

  	$(sound)[0].play();
  	window.setTimeout(function(x){
  		$(targetObj).removeClass(animateClasses)
		}
  		,delay )
  }  
 