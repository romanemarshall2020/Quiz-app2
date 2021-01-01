$(document).ready(function() {
	// let randomNumber = Math.floor(Math.random() * 10);
	let points = 0;
	// Array of Questions
	const questions = [];
	const correct = [];
	const incorrect = []
	let count = 0;
	let answerCount = 0

	let url = 'https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=boolean';
	$.ajax({
		url: url,
		method: 'GET',
		datatype: 'json',

		success: function(response) {
			// click event
			$('.start-btn').on('click', function(e) {
				// removes hide class from quiz box, revealing it on the screen
				$('.quiz-box').removeClass('hide');
				//adds hide class to bix 1, making it disappear
				$('.box-1').addClass('hide');
				e.preventDefault();
				for (let result of response.results) {
					// pushes questions into an array for later use
					questions.push(result.question);
					// pushes correct answer to question into correct for later use
					correct.push(result.correct_answer);
					// pushes incorrect answers into incorrect for later use
					incorrect.push(result.incorrect_answers)
				}
				console.log(questions);
				console.log(correct);
				console.log(incorrect)
				displayQuest();
				answer()
				check()
			});
		}
	});

	function displayQuest() {
		for (let i = 0; i <= questions.length; i++) {
			questions.forEach((element) => {
				$('.question-text').html(`${element}`);
				$('.question-number').html(`${count} of ${questions.length}`);
			});
		}
	
	}
	function answer() {
	for(let i = 0; i <= correct.length; i++) {
		correct.forEach((element) => {
			trueAnswer = element[i]
		//  if(element[i] = "true") {
		// 	 $('#true').on('click', function() {
		// 			// alert('you are correct')
		// 			console.log('your correct')
		// 	 }) 
		//  } else {$('#fasle').on('click', function(){
		// 	//  alert('you are incorrect')
		// 	 console.log('you are incorrect')
		//  })}
		})
	}
}
	//my next question function
	$('.next-btn').on('click', function() {
		for (let i = 0; i < questions.length - 1; i++) {
			if (count < questions[i].length) {
				count++;
				console.log(questions[count]);

				return $('.question-text').html(`${questions[count]}`);
			}
			else {
				return alert('All Questions Completed')
			} 
		}
	});

	function check(trueAnswer) {
	for(let i = 0; i <= correct.length - 1; i++) {
			if (answerCount < correct[i].length){
				answerCount++
				console.log(correct[answerCount])
				let playerChoice = $('#true').on('click') || $('#false').on('click')
			if(playerChoice = trueAnswer) {
				console.log('you chose correct')
			} else if(playerChoice != trueAnswer) {
				console.log('you are incorrect')
			}
			
			// WrongAnser != trueAnswer
			
			}
	}
	// console.log(correctAnswer)

	}
	

// $('#true').on('click', function() {
// 	$(".question-text").html("question is true")
// })

// $('#false').on('click', function() {
// 	$(".question-text").html("question is false")
// })

});
