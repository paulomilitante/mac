var currentQuestion = 0;
var totalQuestions = quiz.length;
var answers = [];
var counts = [];
var compare = 0;
var mostFrequent;

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

		var r = result[mostFrequent];

		$('#prodName').html(r.product);
		$('#prodDesc').html(r.description);
		$('#prodImg').attr('src',r.img);

		$('.quiz').hide();
		$('.result').show();
	}
	else {
		currentQuestion++;
		loadQuestion(currentQuestion);
	}

});

loadQuestion(currentQuestion);