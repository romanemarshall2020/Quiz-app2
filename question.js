$(document).ready(function() {
	// let randomNumber = Math.floor(Math.random() * 10);
	let points = 0;
	// Array of Questions
	const questions = [];
	const correct = [];
	const count = 0;

	let url = 'https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=boolean';
	// let query = $('.start-btn').on('click', fetch(url));
	$.ajax({
		url: url,
		method: 'GET',
		datatype: 'json',

		beforeSend: function() {
			$('.render').show();
		},

		
		success: function(response) {
			const length = questions.length;
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


	function displayQuest(nextIdx) {

		for (let i = 0; i < questions.length; i++) {
			let output = '';
			output += `
<div class="quiz-box custom-box  ">
<div class="question-number">
			${count} of ${questions.length}
</div>
<div class="question-text">
${questions[i]}
</div>
<div class="option-container">
 <div class="option" value="true">True</div>
 <div class="option" value="false">False</div>
</div>

<div class="next-question-btn">
 <button onclick="nextIdx('.btn')" type="button" class="btn">Next</button>
</div>
			 `;

			$('.render').html(output);
		
			
		}
		
		
	}


	function nextIdx(idx = 0, length, direction) {
		switch (direction) {
			case 'Next': return (idx + 1) % length
			default: return idx
		}
	}


	let idx
	function newIndexRender(direction) {
		idx = nextIdx(idx, length, direction);
		$('.question-text').html(questions[idx])
	} 

	newIndexRender()



	
	
	
	
});
