function init() {
	document.onkeypress = function(e) {
		//Spacebar - takes user back to main menu
		if(e.keyCode===32) {
			window.location='/mainmenu';
		}

		//1
		else if(e.keyCode===49) {
			aler("Not supported");
		}
		//2
		else if(e.keyCode===50) {
			aler("Not supported");
		}
		//3
		else if(e.keyCode===51) {
			alert("Not supported");
		}
		//4
		else if(e.keyCode===52) {
			alert("Not supported");
		}
	}
}
window.onload = init();
