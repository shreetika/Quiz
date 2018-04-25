function check() {
	var que1= document.quiz.que1.value;
	var que2= document.quiz.que2.value;
	var que3= document.quiz.que3.value;
	var que4= document.quiz.que4.value;
	var que5= document.quiz.que5.value;
	var que6= document.quiz.que6.value;
	var que7= document.quiz.que7.value;
	var correct=0;
	if (que1=="octopus"|| que1=="Octopus"|| que1=="OCTOPUS") {
		correct++;


	}
	if (que2=="206") {
		correct++;


	}
	if (que3=="three") {
		correct++;


	}
	if (que4=="pizza") {
		correct++;


	}
	if (que5=="250") {
		correct++;


	}
	if (que6=="1799") {
		correct++;


	}
	if (que7=="coffee") {
		correct++;


	}
	var messages =["Great", "That's just ok", "You really need to do better"];
	var pictures =["img/sucess.gif", "img/meh.gif", "img/fail.gif"];
	var range;
	if(correct < 3){
		range=2;
	}
	if(correct > 0 && correct < 7){
		range=1;
	}
	if(correct > 4){
		range=0;
	}

	
	document.getElementById("number_correct").innerHTML = "you got " +correct+ "correct.";

	document.getElementById("after_submit").style.visibility="visible";
	document.getElementById("messages").innerHTML = messages[range];
	document.getElementById("pictures").src =pictures[range];



}