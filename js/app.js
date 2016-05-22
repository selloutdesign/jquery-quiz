$(document).ready(function() {
	// make answer li's selectable
	$(function() {
    	$( "#answer-list" ).selectable();
  	});
	// Initialize Objects


	var score = 0;

	var questionNumber = 0;

	var questions = [
		{text: "What is this an example of?",
		image: "/quiz-app/images/placeholder.png",
		answers: ["ans1", "Correct", "ans3", "ans4"],
		helper:"Description of the answer and Solution",
		correctAnswer: "Correct"
		},
		{text: "What is jQuery",
		image: "/quiz-app/images/placeholder.png",
		helper:"Description of the answer and Solution",
		answers: ["ans1", "ans2", "ans3", "Correct"],
		correctAnswer: "Correct"
		}
	];

	// update qustion counter
	$(".total-questions").text(questions.length);
	$(".current-question").text(questionNumber + 1);
	// Start Game
	$("#start").click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$(this).hide("slow", function(){	
		});

		loadQuestion(questionNumber);
	});


	// Load a Question
	var loadQuestion = function(index){
		$(".question-text").text(questions[index].text);

		if(questions[index].image != ""){
			$(".question-image").show('slow/400/fast', function() {
			
			});
			$(".question-image").attr('src', questions[index].image)
		}

		$.each(questions[index].answers, function(i){
			$("#answer-list").append('<li class="ui-widget-content">' + questions[index].answers[i] + '</li>');
		});

		$("#submit").show('slow/400/fast', function() {
			
		});
		
	};


	// Update Question Number
	var plusQuestionNumber = function(){

	};

	// submit answer
	$("#submit").click(function(){
		// check to make sure an answer has been selected 
		if( $(".ui-selected").text() == questions[questionNumber].correctAnswer){
			$(".info").show();
			$(".info").text("Correct!")
			$(".info").append('</br>' + questions[questionNumber].helper)
			clearBoard();
			$("#next").show('slow/400/fast', function() {
				
			});
			score += 1;
			questionNumber += 1;
		}
		else{
			$(".info").text("Incorrect!")
			$(".info").append('</br>' + questions[questionNumber].helper)
			$("#next").show('slow/400/fast', function() {
				
			});
			clearBoard();
			questionNumber += 1;

		}

	});

	
	// Check for end of game else display next question after reviewing answer
	$("#next").click(function(){
		if($(".current-question").text() == $(".total-questions").text()){
			$(".info").text('Game Over');
			$(".info").append('</br>' + 'You got: ' + score + ' correct answers.');
			$("#next").hide();
			$("#new-game").show();
		}
		else{
			$("#next").hide('slow/400/fast', function() {
			
			});
			$(".info").hide('slow/400/fast', function() {
				
			});

			$(".current-question").text(questionNumber + 1);
			loadQuestion(questionNumber);
		}
		
	});


	// Clear Board
	var clearBoard = function(){
		$("#answer-list").empty();
		$(".question-text").empty();
		$(".question-image").hide('slow/400/fast', function() {});
		$("#submit").hide('slow/400/fast', function() {});
			
	};

	// Start new Game
	$("#new-game").click(function(event) {
		/* Act on the event */
		$(".info").hide();
		$("#new-game").hide();
		score = 0;
		questionNumber = 0;
		$(".current-question").text(questionNumber + 1);
		loadQuestion(questionNumber);
	});
});