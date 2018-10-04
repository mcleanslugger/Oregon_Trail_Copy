function TopScore(name, score, date) {
	this.name=name;
	this.score=score;
	this.date=date;
}

function printScores(top10) {
	var el0 = document.getElementById("player1");
	var el1 = document.getElementById("player2");
	var el2 = document.getElementById("player3");
	var el3 = document.getElementById("player4");
	var el4 = document.getElementById("player5");
	var el5 = document.getElementById("player6");
	var el6 = document.getElementById("player7");
	var el7 = document.getElementById("player8");
	var el8 = document.getElementById("player9");
	var el9 = document.getElementById("player10");
	var scorePrint;

	scorePrint = top10[0].name + " - "
		+ top10[0].score + " - "
		+ top10[0].date;
	el0.innerHTML = scorePrint;

	scorePrint = top10[1].name + " - "
		+ top10[1].score + " - "
		+ top10[1].date;
	el1.innerHTML = scorePrint;

	scorePrint = top10[2].name + " - "
		+ top10[2].score + " - "
		+ top10[2].date;
	el2.innerHTML = scorePrint;

	scorePrint = top10[3].name + " - "
		+ top10[3].score + " - "
		+ top10[3].date;
	el3.innerHTML = scorePrint;

	scorePrint = top10[4].name + " - "
		+ top10[4].score + " - "
		+ top10[4].date;
	el4.innerHTML = scorePrint;

	scorePrint = top10[5].name + " - "
		+ top10[5].score + " - "
		+ top10[5].date;
	el5.innerHTML = scorePrint;

	scorePrint = top10[6].name + " - "
		+ top10[6].score + " - "
		+ top10[6].date;
	el6.innerHTML = scorePrint;

	scorePrint = top10[7].name + " - "
		+ top10[7].score + " - "
		+ top10[7].date;
	el7.innerHTML = scorePrint;

	scorePrint = top10[8].name + " - "
		+ top10[8].score + " - "
		+ top10[8].date;
	el8.innerHTML = scorePrint;

	scorePrint = top10[9].name + " - "
		+ top10[9].score + " - "
		+ top10[9].date;
	el9.innerHTML = scorePrint;
}


function init() {
	var top10 = new Array();
	top10[0] = new TopScore("Abraham Lincoln", 1000, "9/20/1997");
	top10[1] = new TopScore("Jack Smith", 2305, "1/1/1970");
	top10[2] = new TopScore("The Rock", 470, "8/30/2001");
	top10[3] = new TopScore("Barack Obama", 2092, "1/6/2017");
	top10[4] = new TopScore("Winston Churchill", 4630, "3/7/1998");
	top10[5] = new TopScore("Sitting Bull", 3820, "10/31/2001");
	top10[6] = new TopScore("Elton John", 0, "9/30/1997");
	top10[7] = new TopScore("Julia Adams", 2100, "9/22/1921");
	top10[8] = new TopScore("General Custer", 2200, "9/19/1997");
	top10[9] = new TopScore("George Washington", 808, "9/23/1997");

	var temp = new TopScore();
	for (var i = 0; i < top10.length; i++) {
			for (var j = i + 1; j < top10.length; j++) {
					if (top10[i].score > top10[j].score) {
							temp = top10[i];
							top10[i] = top10[j];
							top10[j] = temp;
					}
			}
	}

	top10.reverse();
	printScores(top10);

	var el = document.getElementById("spacePress");
	document.onkeypress = function(e) {
		if(e.keyCode===32) {
			window.location='/mainmenu';
		}
	}
	el.onclick = function() {
		window.location='mainmenu';
	}
}
window.onload = init();
