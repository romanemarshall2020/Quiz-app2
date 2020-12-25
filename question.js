// Array of Objects
$(document).ready(function() {
	let randomNumber = Math.floor(Math.random() * 10);
	let points = 0;
    const questions = [];
    const correct = []

	let url = 'https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=boolean';
	// let query = $('.start-btn').on('click', fetch(url));
	$.ajax({
		url: url,
		method: 'GET',
		datatype: 'json',

		beforeSend: function() {
			$('.render').show();
		},

		// complete: function () {

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
                    correct.push(result.correct_answer)
                   
				}
                console.log(questions[3]);
                console.log(correct)
                
                

                

				let output = '';
				// console.log(response)
				// for (let result of response.results) {
				//     response.results.forEach(display) = {
				//     }
				//     function display(value, index, arr) {
				//         console.log(arr[i].question)
				//     }
				// response.results.map(question => {
				//     formattedQuestion = {
				//         question: response.results.questions
				//     }
				//     console.log(question)
				// })
				                    output += `
				    <div class="quiz-box custom-box ">
				    <div class="question-number">

				    </div>
				    <div class="question-text">
				    ${questions[1]}
				    </div>
				    <div class="option-container">
				        <div class="option" value="true">True</div>
				        <div class="option" value="false">False</div>
				    </div>

				   <div class="next-question-btn">
				        <button type="button" class="btn">Next</button>
				   </div>
				                    `

                                $('.render').html(output)
                                console.log('')
			});
		}
	});
});
