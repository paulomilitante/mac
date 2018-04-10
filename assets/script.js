var currentQuestion = 0;
var totalQuestions = quiz.length;
var answers = [];

function loadQuestion(questionIndex) {
	var q = quiz[questionIndex];
	$('#question').html(q.question);
	$('#opt1').html(q.option1);
	$('#opt2').html(q.option2);
	$('#opt3').html(q.option3);
	$('#opt4').html(q.option4);
}


$('.answer').click(function(){
	var a = $(this).data('index')
	answers.push(a);
	
	if(currentQuestion == totalQuestions-1){
		$('.quiz').hide();
		$('.result').html(answers);
		$('.result').show();
	}
	else {
		currentQuestion++;
		loadQuestion(currentQuestion);
	}

});

loadQuestion(currentQuestion);