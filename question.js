$(document).ready(function() {
	// let randomNumber = Math.floor(Math.random() * 10);
	let points = 0;
	// Array of Questions
	const questions = [];
	const correct = [];
	let count = 0;

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
					// pushes correct anwer to question into correct for later use
					correct.push(result.correct_answer);
				}
				console.log(questions);
				console.log(correct);
				displayQuest();
				
			});
			

			
		}
	});


	function displayQuest() {

		for (let i = 0; i <= questions.length; i++) {
			questions.forEach(element => {
				$('.question-text').html(`${element}`)
				$('.question-number').html(`${count} of ${questions.length}`)
			});
		
		}
		
	}
	
	$('.next-btn').on('click', function() {
		for (let i = 0; i < questions.length -1; i++){
		if (count < questions[i].length) {
			count++
			console.log(questions[count])
			
			return $('.question-text').html(`${questions[count]}`)

		}
		}

		
		
	})
});
