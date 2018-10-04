function init() {
	var el1 = document.getElementById('option1');
	var el2 = document.getElementById('option2');
	var el3 = document.getElementById('option3');
	var el4 = document.getElementById('option4');

	function toggleSound() {
	    var currentSound = sessionStorage.getItem('soundStatus');
	    if(currentSound == "true") {
	        currentSound = "false";
					el4.innerHTML = "4. Turn sound on";
	    } else {
	        currentSound = "true";
					el4.innerHTML = "4. Turn sound off";
	    }
	    console.log(currentSound);
	    sessionStorage.setItem('soundStatus', currentSound)

	    checkSound();
			return(currentSound);
	}

	document.onkeypress = function(e) {
		//1
		if(e.keyCode===49) {
			window.location='/setup';
		}
		//2
		else if(e.keyCode===50) {
			alert("Not supported");
		}
		//3
		else if(e.keyCode===51) {
			window.location='/topten';
		}
		//4
		else if(e.keyCode===52) {
			toggleSound();
		}
	}

	el1.onclick = function() {
		window.location='/setup';
	}

	el2.onclick = function() {
		alert("Not supported");
	}

	el3.onclick = function() {
		window.location='/topten';
	}

	el4.onclick = function() {
		toggleSound();
	}
}

window.onload = init();
