var currentQuestion = 0;
var totalQuestions = quiz.length;
var answers = [];
var counts = [];
var compare = 0;
var mostFrequent;
var rIndex = $("#result").data('index');

function loadQuestion(questionIndex) {
	var q = quiz[questionIndex];
	$('#question').html(q.question);
	$('#opt1').html(q.option1);
	$('#opt2').html(q.option2);
	$('#opt3').html(q.option3);
	$('#opt4').html(q.option4);
}

function loadResult(resultIndex) {
	var r = result[resultIndex];

	$('#prodName').html(r.product);
	$('#prodDesc').html(r.description);
	$('#prodImg').attr('src',r.img);
	$('#prodName2').val(r.product);
	$('#prodDesc2').val(r.description);
	$('#prodImg2').val(r.img);	

}


$('.answer').click(function(){
	var a = $(this).data('index')
	answers.push(a);
	
	if(currentQuestion == totalQuestions-1){

		
		for(var i = 0; i < answers.length; i++){
		var index = answers[i];

			if(!counts[index]){
				counts[index] = 1;
			}
			else {
				counts[index]++;
			}
			if(counts[index] > compare){
				compare = counts[index];
				mostFrequent = answers[i];
			}
		}

		switch(mostFrequent) {
			case 0:
				window.location.href = "risk_taker.html";
				break;
			case 1:
				window.location.href = "qween_supreme.html";
				break;
			case 2:
				window.location.href = "power_hungry.html";
				break;
			case 3:
				window.location.href = "mischief_minx.html";
				break;
		}

	}
	else {
		currentQuestion++;
		loadQuestion(currentQuestion);
	}

});

loadQuestion(currentQuestion);
loadResult(rIndex);