

var triviaQuestions = [{
	question: "Which one of these princesses is NOT part of Disney’s official princess lineup?",
	answerList: ["Rapunzel", "Merida", "Elsa", "Pocahontas"],
	img: ['./assets/images/Rapunzel.png', './assets/images/Merida.png','./assets/images/Elsa.png', './assets/images/pocahontas.png'],
	answer: 2
},{
	question: "Which popular Disney character makes an appearance as a stuffed animal in Frozen?",
	answerList: ["Winnie the Pooh", "Mickey Mouse", "Tinker Bell", "Mr. Potato Head"],
	img: ['./assets/images/winnie.png', './assets/images/mickey.png','./assets/images/tinker.png', './assets/images/potato.png'],
	answer: 1
},{
	question: "Who was the first Disney princess?",
	answerList: ["Cinderella", "Pocahontas", "Aurora", "Snow White"],
	img: ['./assets/images/cinderella.png', './assets/images/pocahontas.png','./assets/images/aurora.png', './assets/images/snow.png'],
	answer: 3
},{
	question: "Who slips the glass slipper onto Cinderella's foot?",
	answerList: ["The Prince", "The Footman", "The King", "The Duke"],
	img: ['./assets/images/prince.png', './assets/images/foot.png','./assets/images/king.png', './assets/images/duke.png'],
	answer: 3
},{
	question: "Which of these Disney characters falls down a rabbit hole and emerges in a far away land?",
	answerList: ["Pinocchio", "Aladdin", "Alice", "Jasmine"],
	img: ['./assets/images/pinocchio.png', './assets/images/aladdin.png','./assets/images/alice.png', './assets/images/jasmine.png'],
	answer: 2
},{
	question: "Which of these Disney characters is very much against growing up?",
	answerList: ["Tinkerbell", "Simba", "Peter Pan", "Tarzan"],
	img: ['./assets/images/tinker.png', './assets/images/simba.png','./assets/images/peter.png', './assets/images/tarzan.png'],
	answer: 2
},{
	question: "Which disney villain is described as a 'Fat, Fompous, Bad-tempered old tyrant.'?",
	answerList: ["Queen of Hearts", "Ursula", "Evil Queen", "Scar"],
	img: ['./assets/images/queen.png', './assets/images/ursula.png','./assets/images/evil.png', './assets/images/scar.png'],
	answer: 0
},{
	question: "In 'Sleeping Beauty', Who stabs Maleficent?",
	answerList: ["Merry Weather", "The King", "Prince Philip", "Aurora"],
	img: ['./assets/images/merry.png', './assets/images/aurora-king.png','./assets/images/aurora-prince.png', './assets/images/aurora.png'],
	answer: 2
},{
	question: "Which Disney villain did NOT fall (then eventually die)?",
	answerList: ["Scar", "Queen of Hearts", "Gaston", "Maleficent"],
	img: ['./assets/images/scar.png', './assets/images/queen.png','./assets/images/gaston.png', './assets/images/maleficent.png'],
	answer: 1
},{






	question: "Which Disney villain says: 'Skip the drama, stay with mama'?",
	answerList: ["Mother Gothel", "Cruella Devil", "Ursula", "Evil Queen"],
	img: ['./assets/images/mother.png', './assets/images/cruella.png','./assets/images/ursula.png', './assets/images/evil.png'],
	answer: 0
}
];
var search = ['disney+frozen+elsa+snowflake+lick', 'disney+mickey+mouse+love', 'disney+snow+white', 'disney+shoes+cinderella+fairy tales', 'disney+wounderland+alice', 'disney+peter+pan', 'alice+in+wonderland+queen+of+hearts', 'disney+confident+sleeping+beauty', 'disney+thank+you+alice', 'disney+tangled+repunzel'];
var currentQuestion; var correctAnswer; var incorrectAnswer; var unanswered; var seconds; var time; var answered; var userSelect;
var messages = {
	correct: "Yes, that's right!",
	incorrect: "Nope, that's not it.",
	endTime: "Out of time!",
	finished: "Final Scores"
}
$("#q-div").hide();
$("#message-div").hide();
$("#score-board").hide();

$('#startBtn').on('click', function(){
	$('#about-div').hide();
	$('#main-header').hide();
	newGame();
});

$('#startOverBtn').on('click', function(){
	$(this).hide();
	newGame();
});

function newGame(){
	$("#score-board").hide();
	$('#finalMessage').empty();
	$('#correctAnswers').empty();
	$('#incorrectAnswers').empty();
	$('#unanswered').empty();
	$("#message-div").hide();
	currentQuestion = 0;
	correctAnswer = 0;
	incorrectAnswer = 0;
	unanswered = 0;
	newQuestion();
}

function newQuestion(){
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#gif').empty();
	$("#q-div").show();
	$("#message-div").hide();
	$("#score-board").hide();
	answered = true;
	
	//sets up new questions & answerList
	$('#currentQuestion').html('Question '+(currentQuestion+1)+'/'+triviaQuestions.length);
	$('.question').html('<h3>' + triviaQuestions[currentQuestion].question + '</h3>');
	for(var i = 0; i < 4; i++){
		var choices = $('<div>');
		var images = $('<img width="200" height="200">');
		// choices.text(triviaQuestions[currentQuestion].answerList[i]);
		choices.attr({'data-index': i });
		choices.addClass('thisChoice');
		images.attr({'data-index': i });
		images.addClass('thisChoice');
		images.addClass('grid-1-5');
		// images.addClass('responsive-image');
		images.addClass('images');

		images.attr('src', triviaQuestions[currentQuestion].img[i]);
		$('.answerList').append(choices);
		$('.answerList').append(images);
	}
	countdown();
	//clicking an answer will pause the time and setup answerPage
	$('.thisChoice').on('click',function(){
		userSelect = $(this).data('index');

		clearInterval(time);
		answerPage();
	});
}

function countdown(){
	seconds = 30;
	$('#timeLeft').html('<h1>' + seconds + '</h1>');
	answered = true;
	//sets timer to go down
	time = setInterval(showCountdown, 1000);
}

function showCountdown(){
	seconds--;
	$('#timeLeft').html('<h1>' + seconds + '</h1>');
	if(seconds < 1){
		clearInterval(time);
		answered = false;
		answerPage();
	}
}

function answerPage(){
	$('#currentQuestion').empty();
	$('.thisChoice').empty(); //Clears question page
	$('.question').empty();
	$('.images').hide();
	$('#timeLeft').empty();
	$("#q-div").hide();
	$("#message-div").show();
	$("#score-board").hide();




	var rightAnswerText = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];
	var rightAnswerIndex = triviaQuestions[currentQuestion].answer;

	//giphy api
	var giphyURL = "http://api.giphy.com/v1/gifs/search?q=" + search[currentQuestion] + "&limit=1&rating=g&api_key=dc6zaTOxFJmzC"
	$.ajax({url: giphyURL, method: 'GET'}).done(function(giphy){
		var currentGif = giphy.data;
		$.each(currentGif, function(index,value){
		var embedGif = value.images.original.url;
		newGif = $('<img width="400" height="300">');
		newGif.attr('src', embedGif);
		newGif.addClass('gifImg');
		$('#gif').html(newGif);
		});
	});
	//checks to see correct, incorrect, or unanswered
	if((userSelect == rightAnswerIndex) && (answered == true)){
		correctAnswer++;
		$('#message').html(messages.correct);
	} else if((userSelect != rightAnswerIndex) && (answered == true)){
		incorrectAnswer++;
		$('#message').html(messages.incorrect);
		$('#correctedAnswer').html("'" + rightAnswerText + "'" + ' ' + 'was the right answer!');
	} else{
		unanswered++;
		$('#message').html(messages.endTime);
		$('#correctedAnswer').html("'" + rightAnswerText + "'" + ' ' + 'was the right answer!');
		answered = true;
	}
	
	if(currentQuestion == (triviaQuestions.length-1)){
		setTimeout(scoreboard, 5000)
	} else{
		currentQuestion++;
		setTimeout(newQuestion, 5000);
	}	
}

function scoreboard(){
	$('#timeLeft').empty();
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#gif').empty();
	$("#message-div").hide();
	$("#score-board").show();

	$('#finalMessage').html(messages.finished);
	$('#correctAnswers').html("Correct: " + correctAnswer);
	$('#incorrectAnswers').html("Incorrect: " + incorrectAnswer);
	$('#unanswered').html("Unanswered: " + unanswered);
	$('#startOverBtn').addClass('reset');
	$('#startOverBtn').addClass('btn btn-primary');
	$('#startOverBtn').show();
	$('#startOverBtn').html('Start Over');
}