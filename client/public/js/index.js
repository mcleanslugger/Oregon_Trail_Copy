function init() {
	var el = document.getElementById("spacePress");
	
	document.onkeypress = function(e) {
		if(e.keyCode===32) {
			window.location='/mainmenu';
		}
	}
	el.onclick = function() {
		window.location='/mainmenu';
	}
}
window.onload = init();
