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
var count = 0;
var randomBackground = function(x) {
	var random = Math.floor(Math.random()*8)
	document.body.style.backgroundColor = colors[random];
}

function giveMeRandom() {
    var rand = Math.floor(Math.random()*100)+1;
    return rand;
};

var randomColor = function(x) {
	var random = Math.floor(Math.random()*8)
	return colors[random]
}


  $("body").keypress(function(event){
  	console.log(event.which)
  	count += 1
  	console.log(count);
  	

	if (event.which === 97) {
  		delayAnimate("._" + count + "_97","animation-spin-right exactCenter hvr-grow",250,"#scifi1" )
  	}	
  	if (event.which === 102) {
  		delayAnimate("._" + count + "_102","star exactCenterPlaceholder",4000,"#flip","assets/images/decagram.png" )
  	}
   	if (event.which === 115) {
  		delayAnimate("._" + count + "_115","animation-top-down exactCenter ",1000,"#tah" )
  	}
   	if (event.which === 100) {
  		delayAnimate("._" + count + "_100" ,"right-to-left",2000,"#thump" )
  		console.log("._" + count + "_100", 2000);
  	}  
  	/////////////////////////////////////////////////////////////////////////////////////	
   	if (event.which === 113) {
   		$("#invader")[0].cloneNode(true).play();
var keyPressed



$(document).keypress(function(evt) {
      keyPressed = evt.which;
      console.log(keyPressed);
      showMe(keyPressed);
});

var colors = ["#BCC7DC", "#C2BCDC", "#DCBCD7", "#DCBCBC", "#F6CD83", "#BEF683", "#83F6B9", "#83F6F4"];
var index = 0;


function giveMeRandom() {
    var rand = Math.floor(Math.random()*100)+1;
    return rand;
};


function showMe(key) {
    var keyGiven = "_" + key;
    var thisAnimation = $("<div class='" + keyGiven + "'></div>")
    
             if (keyGiven === "_113") {
                    thisAnimation.css({
                        top: giveMeRandom() + "%",
                        left: giveMeRandom() + "%",
                        backgroundColor: randomColor()
                    })//cssAnimation
                $("body").append(thisAnimation);
            }//ifStatement

    // $("body").append(thisAnimation);
        
        setTimeout(function() {
                    thisAnimation.remove();
                }, 2000);
}//showMe `



  	}    // end event 113  	
//////////////////////////////////////////////////////////////////////////////////////////////////////


  	randomBackground()
  }) // end random background



  function delayAnimate(targetObj,animateClasses,delay,sound,image) {
  	$("body").append('<div class= "_' + count + "_" + event.which + '" ></div>')
  	console.log('<div class= "_' + count + "_" + event.which + '" ></div>', 22222);
  	var currentItem = $('._' + count + "_" + event.which + '')
  	//console.log(currentItem, "currentItem");
  	console.log('<div class="._' + count + "_" + event.which + '" ></div>')
  	$(targetObj).addClass(animateClasses)
  	console.log(animateClasses, "animateClasses");
  // 	$(".animation-top-down").css({
  // 		top: "50%", 
		// left: "50%" 
  // 	})
	if (event.which === 115){
	randomLocation(".animation-top-down", "n", "y")
  	} else if (event.which === "113") {
                    style.css({
                        top: giveMeRandom() + "%",
                        left: giveMeRandom() + "%"
                    })//cssAnimation
     }


  	if (image !== undefined) {

  		currentItem.append('<img src='+ image +' height="300px" width="300px">')
  	} // end if
  	$(sound)[0].cloneNode(true).play();
  	setTimeout(function(){
  		$(targetObj).remove(targetObj)
		}
  		,delay )
  }  // end delayAnimate

 function randomLocation(aniClass,horizontal,vertical,opacity) {
 	if (horizontal === "y") {
 		var topR =  Math.floor(Math.random()*90) + "%"
 	} else {
 		topR = "50%"
 	}
 	if (vertical === "y") {
 		var leftR = Math.floor(Math.random()*90) + "%"
 	} else {
 		leftR = "50%"
 	}	
 	console.log(topR, leftR)
 	$(aniClass).css({
  		top: topR, 
		left: leftR 
  	})
 }
 