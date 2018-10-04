var audio = new Audio('/music/Toto_Africa.mp3');

function checkSound() {
	var currentSound = sessionStorage.getItem("soundStatus");
	console.log(currentSound);
	if (currentSound == "true") {
		audio.play();
	} else {
	    audio.pause();
	}
}

checkSound();
