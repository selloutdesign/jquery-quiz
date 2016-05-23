$(document).ready(function() {
	// make answer li's selectable
	$(function() {
    	$( "#answer-list" ).selectable();
  	});
	// Initialize Objects


	var score = 0;

	var questionNumber = 0;

	var questions = [
		{text: "Which of the following will retrieve information from the object?",
		image: "images/array-question.jpg",
		answers: ["user.1969;", "user[title/position]", "user['title/position']", "user.title/position;"],
		helper:"Notice how some of the object keys here are in quotes. Simple key names do not have to be in quotes in JavaScript, but if you want a number or special character, you need to put the key in quotes. Also, you can see that numbers and special characters cannot be used with dot notation to access a property. The number 1969 can be accessed in bracket notation without quotes, but you may have noticed that title/position will only work if it's in quotes, due to the special character. Finally the name you saw in the previous example can be accessed with or without quotes, and it will give you the same response. You may be asking why you would need to use quotes in this case? Take a look at the following example that uses a variable to find a property in an object.",
		correctAnswer: "user['title/position']"
		},
		{text: "What does DRY stand for when discussing programming best habits?",
		image: "",
		answers: ["Danger Recommended Yard", "Do Require Yourself", "Don't Repeat Yourself", "Don't Right Yourself"],
		helper:"Do Not Repeat yourself!!! Write code that can be reused rather than solving the same problems over and over.",
		correctAnswer: "Don't Repeat Yourself"
		},
		{text: "Why are Callback Functions important in Javascript?",
		image: "",
		helper:"JavaScript callback functions are wonderful and powerful to use and they provide great benefits to your web applications and code. You should use them when the need arises; look for ways to refactor your code for Abstraction, Maintainability, and Readability with callback functions. See you next time, and remember to keep coming back because JavaScriptIsSexy.com has much to teach you and you have much to learn.",
		answers: ["For asynchronous execution (such as reading files, and making HTTP requests)", "In Event Listeners/Handlers", "In setTimeout and setInterval methods", "For Generalization: code conciseness", "All of the above"],
		correctAnswer: "All of the above"
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
			$(".info").show();
			$(".info").text("Incorrect!");
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