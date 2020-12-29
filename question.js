$(document).ready(function() {
	// let randomNumber = Math.floor(Math.random() * 10);
	let points = 0;
	// Array of Questions
	const questions = [];
	// const length = questions.length;
	const correct = [];
	let count = 0;

	let url = 'https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=boolean';
	// let query = $('.start-btn').on('click', fetch(url));
	$.ajax({
		url: url,
		method: 'GET',
		datatype: 'json',

		// beforeSend: function() {
		// 	$('.render').show();
		// },

		
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
			// let output = ''
			// output += 
			questions.forEach(element => {
				$('.question-text').html(`${element}`)
				$('.question-number').html(`${count} of ${questions.length}`)
			});
			

			
			
// 			let output = '';
// 			output += `
// <div class="quiz-box custom-box  ">
// <div class="question-number">
// 			${count} of ${questions.length}
// </div>
// <div class="question-text">
// ${questions[i]}
// </div>
// <div class="option-container">
//  <div class="option" value="true">True</div>
//  <div class="option" value="false">False</div>
// </div>

// <div class="next-question-btn">
//  <button onclick="nextIdx('Next')" type="button" class="btn" id="next-btn">Next</button>
// </div>
// 			 `;
		
		}
		
	}
	

	// function nextQuest () {
		
		
	// }
	$('.next-btn').on('click', function() {
		for (let i = 0; i < questions.length; i++){
		if (count < questions.length) {
			// print.html = questions[count];
			count++

			$('.question-text').html(`${questions[count]}`)
			console.log(questions[count])

		}
		}
		
	})
});
