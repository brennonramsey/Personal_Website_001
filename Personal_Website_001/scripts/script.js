  console.log("Created By: Brennon Ramsey");
	console.log("Twitter: www.twitter.com/brennonramsey");
	console.log("Zero Rights Reserved");
	console.log("Public Domain");

//Console Commands======================================================	
	// More text code goes here
	//document.write('Push "A" to open Command-Line');
	//Color Stuff
	function eprom(){
	var color = prompt("Command-Line");
	if(color == "home"){//Home
		document.getElementById("myFrame").src = "home.html";
	}else if(color =="about"){//About Me
		document.getElementById("myFrame").src = "about.html";
	}else if(color=="work"){//Work Experience
		document.getElementById("myFrame").src = "work.html";
	}else if(color=="port"){//Portfolio
		document.getElementById("myFrame").src = "port.html";
	}else if(color=="contact"){//Contact Me
		document.getElementById("myFrame").src = "contact.html";
	}else if(color=="test"){//Test HTML5 Game
		document.getElementById("myFrame").src = "html5game/index.html";
	}else if(color=="list"){//List
		alert("Commands: list, about, home, work, port, contact, reload, clear, test");
	}else if(color =="reload"){//Reload
	  location.reload();
	}else if(color =="clear"){//Clear
	   document.body.innerHTML = "";
        for (var i = 0; i < 1000000000; i++) {
    }
  }
}
//eprom();
	//Reload Color Command Prompt
	window.addEventListener("keydown", checkKeyPressed, false);
 
		function checkKeyPressed(e) {
    	if (e.keyCode == "65") {
        	eprom();
    }
}

//Front Page Button Commands======================================================
function myFunctionOne() { //About Me
    document.getElementById("myFrame").src = "about.html";}
function myFunctionTwo() { //Work Experience
    document.getElementById("myFrame").src = "work.html";}
function myFunctionThree() { //Portfolio
    document.getElementById("myFrame").src = "port.html";}
function myFunctionFour() { //Contact me
    document.getElementById("myFrame").src = "contact.html";}
function myFunctionFive() { //Home
    document.getElementById("myFrame").src = "home.html";}

//Portfolio Link Commands======================================================
//Row One-----------------------------------------------------------
function changePictureOneOne() {
      var myPopup = window.open('http://art.ngfiles.com/images/490000/490861_brennonramsey_theodore-the-viking.png','Image','width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');
}
function changePictureOneTwo() {
      var myPopup = window.open('http://art.ngfiles.com/images/392000/392304_brennonramsey_merman.png','Image','width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');
}
function changePictureOneThree() {
      var myPopup = window.open('http://art.ngfiles.com/images/387000/387183_brennonramsey_metal-sonic-fan-art.png','Image','width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');
}
function changePictureOneFour() {
      var myPopup = window.open('http://art.ngfiles.com/images/358000/358596_brennonramsey_naruto-shippuden-fan-art.png','Image','width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');
}
function changePictureOneFive() {
      var myPopup = window.open('http://art.ngfiles.com/images/351000/351644_brennonramsey_mr-cat.png','Image','width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');
}
//Row Two-----------------------------------------------------------
function changePictureTwoOne() {
      var myPopup = window.open('http://art.ngfiles.com/images/323000/323848_brennonramsey_white-tiger.png','Image','width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');
}
function changePictureTwoTwo() {
      var myPopup = window.open('http://art.ngfiles.com/images/304000/304841_brennonramsey_my-neighbor-totoro.png','Image','width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');
}
function changePictureTwoThree() {
      var myPopup = window.open('http://art.ngfiles.com/images/250000/250907_brennonramsey_evil-minion.png','Image','width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');
}
function changePictureTwoFour() {
      var myPopup = window.open('http://art.ngfiles.com/images/247000/247910_brennonramsey_alien-spaceship.png','Image','width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');
}
function changePictureTwoFive() {
      var myPopup = window.open('http://art.ngfiles.com/images/244000/244724_ramztoons_pokemon-ho-oh.png','Image','width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');
}
//Row Three-----------------------------------------------------------
function changePictureThreeOne() {
      var myPopup = window.open('http:\/\/uploads.ungrounded.net\/658000\/658708_rock_paper_scissors.swf','Image','width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');
}
function changePictureThreeTwo() {
      var myPopup = window.open('http:\/\/uploads.ungrounded.net\/658000\/658599_final_peppers_game-7.swf','Image','width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');
}
function changePictureThreeThree() {
      var myPopup = window.open('http:\/\/uploads.ungrounded.net\/655000\/655901_no-clue.swf','Image','width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');
}
function changePictureThreeFour() {
      var myPopup = window.open('http:\/\/uploads.ungrounded.net\/639000\/639965_the-trip-brennon.swf','Image','width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');
}
function changePictureThreeFive() {
      var myPopup = window.open('http:\/\/uploads.ungrounded.net\/601000\/601036_EndlessRunnerPrototype.swf','Image','width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');
}
