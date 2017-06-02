
$(document).ready(function() {

	var index = 0;
	var timeCounter = {
		time: 30,
		


		reset: function() {
			this.time = 30;
			$('.clock').html('<h4>' + this.time + ' seconds</h4>');
			},

		start: function() {
			counter = setInterval(timeCounter.count, 1000);
		},


		stop: function() {

			clearInterval(counter);
		},


		count: function() {

			timeCounter.time--;
			console.log(timeCounter.time);
			

			if(timeCounter.time >= 0) {
				$(".clock").html("<h4>" + timeCounter.time + " seconds</h4>");
			}
			else {
				index++;
				wrong();
				timeCounter.reset();
			if (index < questions.length) {
					pushQuestion(index);
				} else {
					$(".choice").hide();
					showScore();
				}

			}
			}
		};	
		
	

		var correctAnswers = 0;
		var wrongAnswers = 0;
		
		var q1 = {
			question: 'Inside which HTML element do we put the JavaScript?',
			answers: ['A. <javascript>',
					  'B. <js>',
					  'C. <scripting>',
					  'D. <script>'],
			flags: [false, false, false, true],
			answer: 'D. <script>'
		};

		var q2 = {
			question: 'What is the correct way to write a JavaScript array?',
			answers: ['A. var colors = ["red", "green", "blue"];',
 					  'B. var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue");',
 					  'C. var colors = "red", "green", "blue"',
 					  'D. var colors = (1:"red", 2:"green", 3:"blue");'],
 			flags: [true, false, false, false],
			answer: 'A. var colors = ["red", "green", "blue"];'
		};

		var q3 = {
			question: 'JavaScript is the same as Java.',

			answers: ['A. True',
 					  'B. False',
 					  'C. Depends on the type of include',
 					  'D. None of these'],
 			flags: [false, true, false, false],
 			answer: 'B. False'
		};

		var q4 = {
			question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
			answers: ['A. <script link="xxx.js">',
					  'B. <script name="xxx.js">',
 					  'C. <script href="xxx.js">',
 					  'D. <script src="xxx.js">'],
 			flags: [false, false, false, true],
 			answer: 'D. <script src="xxx.js">'
 		};

 		var q5 = {
 			question: 'How do you write "Hello World" in an alert box?',
 			answers: ['A. alertBox("Hello World");',
 					  'B. msgBox("Hello World");',
                      'C. alert("Hello World");',
 					  'D. msg("Hello World");'],
 			flags: [false, false, true, false],
 			answer: 'C. alert("Hello World")'
 		};
 		
 		var q6 = {
 			question: 'How do you create a function in JavaScript?',
 			answers: ['A. function myFunction()',
 					  'B. function = myFunction()',
 					  'C. function:myFunction()',
 					  'D. var myFunction = 0;'],
 		    flags: [false, true, false, false],
 		    answer: 'B. function = myFunction()'
 		};

 		var q7 = {
 			question: 'How do you call a function named "myFunction"?',
 			answers: ['A. myFunction()',
 				      'B. call function myFunction()',
 				      'C. call myFunction()',
 				      'D. myFunction.html()'],
 			flags: [true, false, false, false],
 			answer: 'A. myFunction()'
		};

		var q8 = {
			question: 'How to write an IF statement in JavaScript?',
			answers: ['A. if i = 5',
					  'B. if i = 5 then',
					  'C. if (i == 5)',
					  'D. if i == 5 then'],
			flags: [false, false, true, false],
			answer: 'C. if (i == 5)'
		};

		var q9 = {
			question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
			answers: ['A. if (i != 5)',
					  'B. if i <= 5',
					  'C. if (i >= 5)',
					  'D. if i =! 5 then'],
			flags: [true, false, false, false],		  
			answer: 'A. if (i != 5)'
		};
		var q10 = {
			question: 'How does a FOR loop start?',
			answers: ['A. for i = 1 to 5',
					  'B. for (var i = 0; i <= 5; i++)',
					  'C. for (i = 0; i <= 5)',
					  'D. for (i <= 5; i++)'],
			flags: [false, true, false, false],
			answer: 'B. for (var i = 0; i <= 5; i++)'
		}
 			var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

 			function pushQuestion(selectQuestion) {
 				console.log(selectQuestion);

 				timeCounter.reset();
  $(".question").html("<h4>" + questions[selectQuestion].question + "</h4>");


  $("#button1").text(questions[selectQuestion].answers[0]).show();
  $("#button2").text(questions[selectQuestion].answers[1]).show();
  $("#button3").text(questions[selectQuestion].answers[2]).show();
  $("#button4").text(questions[selectQuestion].answers[3]).show();
				
				}

			function setup() {
				
				index = 0;

	$(".choice").hide();
	$('.question').append('<button id="startButton">Start The Game</button>');
	$('#startButton').on('click', function() {
		$(this).hide();


		timeCounter.start();
	 	pushQuestion(index);
	});

}

			function getAnswer() {


	$('.choice').on('click', function() {
	  
		index++;
		
		$(".question").text('');
		$("#button1").text('');
		$("#button2").text('');
		$("#button3").text('');
		$("#button4").text('');
		pushQuestion();
	})
}


		function correct() {
	correctAnswers++;
	
}

		function wrong() {
	wrongAnswers++;
	
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h3><p>" + correctAnswers + " Correct </p></h3>");
	$('.question').append("<h3><p>" + wrongAnswers + " Wrong </p></h3>");
	timeCounter.stop();
	$('.clock').empty();

}

setup();

$('.choice').on('click', function() {
 
 if(this.id == 'button1') {
 	var userChoice = '1';
 } else if(this.id == 'button2') {
 	userChoice = '2';
 } else if (this.id == 'button3') {
 	userChoice = '3';
 } else if (this.id == 'button4') {
 	userChoice = '4';
 } 
 if ((userChoice == '1') && (questions[index].flags[0] == true)) {
 	correct();
 } else if (userChoice == '1') {
 	wrong();
 }
 if ((userChoice == '2') && (questions[index].flags[1] == true)) {
 	correct();
 } else if (userChoice == '2') {
 	wrong();
 }
if ((userChoice == '3') && (questions[index].flags[2] == true)) {
 	correct();
 } else if (userChoice == '3') {
 	wrong();
 }
if ((userChoice == '4') && (questions[index].flags[3] == true)) {
 	correct();
 } else if (userChoice == '4') {
 	wrong();
 }

 $(".question").text('');
 $("#button1").text('');
 $("#button2").text('');
 $("#button3").text('');
 $("#button4").text('');
 index++;
 if (index < questions.length) {
 	pushQuestion(index);
 } else {
 	$(".choice").hide();
 	showScore();
 }
});

});

