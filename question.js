
// Array of Objects
$(document).ready(function () {
    let random = Math.floor(Math.random() * 10)
    let points = 0
    let questions = []

    $('.start-btn').on('click', function (e) {
        // alert('you clicked')
        $('.quiz-box').removeClass('hide')
        $('.box-1').addClass('hide')
        e.preventDefault();

        let url = 'https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=boolean'
        // let query = $('.start-btn').on('click', fetch(url));
        $.ajax({
            url: url,
            method: 'GET',
            datatype: 'json',

            beforeSend: function () {
                $('.render').show();
            },

            // complete: function () {

            // },
            success: function (response) {
                let output = '';
                // console.log(response)
                for (let result of response.results) {
                    response.results.forEach(display) = {

                    }
                    function display(value, index, arr) {
                        console.log(arr[i].question)
                    }





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
    ${result.question}
    </div>
    <div class="option-container">
        <div class="option">True</div>
        <div class="option">False</div>
    </div> 

   <div class="next-question-btn">
        <button type="button" class="btn">Next</button>
   </div>
                    `
                }
                $('.render').html(output)
            }
        })
    })

});