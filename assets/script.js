// touch t (84) box appears on the screen, centered
// play a sound effect
// http://www.colorhexa.com/6950d9

var colors = [
"#dfb9f0",
"#c3b9f0",
"#e6f0b9",
"#b9cbf0",
"#c3b9f0",
"#dfb9f0",
"#b9f0c3",
"#f0c3b9",
]

var randomBackground = function(x) {
	var random = Math.floor(Math.random()*8)
	document.body.style.backgroundColor = colors[random];
}


  $("body").keypress(function(event){
  	console.log(event.which)
  	$("body").append('<div class= "_' + event.which + '" ></div>')

	if (event.which === 116) {
  	delayAnimate("._116","animation-spin-right exactCenter hvr-grow",250,"#clap" )
  	}	
  	if (event.which === 114) {
  	delayAnimate("._114","star",3000,"#clap","assets/images/star3.png" )
  	}
   	if (event.which === 101) {
  	delayAnimate("._101","animation-top-down exactCenter",3000,"#clap" )
  	}
  	randomBackground()
  }) // end random background



  function delayAnimate(targetObj,animateClasses,delay,sound,image) {
  	var currentItem = $('._' + event.which + '')
  	//console.log(currentItem, "currentItem");
  	console.log('<div class="_' + event.which + '" ></div>')
  	$(targetObj).addClass(animateClasses)
  	console.log(animateClasses, "animateClasses");
  	$(".animation-top-down").css({
  		top: "50%", 
		left: "50%" 
  	})
	randomLocation()
  	if (image !== undefined) {

  		currentItem.append('<img src='+ image +' height="64px" width="64px">')
  	} // end if
  	$(sound)[0].play();
  	window.setTimeout(function(x){
  		$(targetObj).remove(targetObj)
		}
  		,delay )
  }  // end delayAnimate

 function randomLocation(horizontal,vertical,opacity) {
 	var topR =  Math.floor(Math.random()*90) + "%"
 	var leftR = Math.floor(Math.random()*90) + "%"
 	console.log(topR, leftR)
 	$(".animation-top-down").css({
  		top: topR, 
		left: leftR 
  	})
 }
 