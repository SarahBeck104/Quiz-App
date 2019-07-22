//STORE
const STORE = [
    {
        question: 'What is the "ball" called in hockey?',
        answers: [
            'Block',
            'Stick',
            'Puck',
            'Ball'
        ],
        correctAnswer: 'Puck',
        questionFeedbackCorrect: 'Great! You choose ${correctAnswer}, and that was the correct answer!',
        questionFeedbackIncorrect: 'Sorry! The correct answer was ${correctAnswer}'

    },

    {
        question: 'How does a play start during a hockey game?',
        answers: [
            'The referee tosses up the puck and whichever team in a face off can get it',
            'Jump ball',
            'Tip the ball',
            'Face off'
        ],
        correctAnswer: 'Face off',
        questionFeedbackCorrect: 'Great! You choose ${correctAnswer}, and that was the correct answer!',
        questionFeedbackIncorrect: 'Sorry! The correct answer was ${correctAnswer}'
    },

    {
        question: 'What is the most critical gear for playing hockey?',
        answers: [
            'Helmet with face mask, elbow and knee pads, skates',
            'Extra laces, water bottle, tape',
            'Hockey bag, skate guard',
            'Jersey, stick, shoulder pads'
        ],
        correctAnswer: 'Helmet with face mask, elbow and knee pads, skates',
        questionFeedbackCorrect: 'Awesome! You choose ${correctAnswer}, and that was the correct answer!',
        questionFeedbackIncorrect: 'Sorry! The correct answer was ${correctAnswer}'
    },

    {
        question: 'What is an interference?',
        answers: [
            'Performing an action that halts play',
            'When a player uses his body to impede the progress of an opponent with no effort to play the puck',
            'When a player impedes the puck carrier',
            'When a player stands in front of the goalie'
        ],
        correctAnswer: 'When a player uses his body to impede the progress of an opponent with no effort to play the puck',
        questionFeedbackCorrect: 'Fantastic! You choose ${correctAnswer}, and that was the correct answer!',
        questionFeedbackIncorrect: 'Sorry! The correct answer was ${correctAnswer}'
    },

    {
        question: 'What is icing?',
        answers: [
            'When a player shoots the puck from all the way across the field to across the opposing team’s goal line without the puck being touched',
            'When a player shoots the puck from behind the center red line, all the way across the opposing team’s goal line without the puck being touched',
            'When a player skids on the ice hard enough to cause other players problems skating',
            'When a player slams another player into the ice'
        ],
        correctAnswer: 'When a player shoots the puck from behind the center red line, all the way across the opposing team’s goal line without the puck being touched',
        questionFeedbackCorrect: 'Great! ${correctAnswer} was the correct answer!',
        questionFeedbackIncorrect: 'Sorry! The correct answer was ${correctAnswer}'
    },

    {
        question: 'What hand should you use as your top hand on the hockey stick?',
        answers: [
            'Dominant hand',
            'Non-dominant hand',
            'Dominant foot',
            'Non-dominant foot'
        ],
        correctAnswer: 'Dominant hand',
        questionFeedbackCorrect: 'Nice one! You choose ${correctAnswer}, and that was the correct answer!',
        questionFeedbackIncorrect: 'Sorry! The correct answer was ${correctAnswer}'
    },

    {
        question: 'What are the four main types of shots?',
        answers: [
            'Slap shot, wrist shot, snap shot, backhand shot',
            'Snap shot, buck shot, crack shot, lick shot',
            'Crack shot, buck shot, backhand shot, elbow shot',
            'Elbow shot, knee shot, wrist shot, hand shot'
        ],
        correctAnswer: 'Slap shot, wrist shot, snap shot, backhand shot',
        questionFeedbackCorrect: 'Cool! ${correctAnswer} was the correct answer!',
        questionFeedbackIncorrect: 'Sorry! The correct answer was ${correctAnswer}'
    },

    {
        question: 'What is the most important skill as a hockey player?',
        answers: [
            'Shooting',
            'Puck controlling',
            'Agility',
            'Skating skills'
        ],
        correctAnswer: 'Skating skills',
        questionFeedbackCorrect: 'Nice! You choose ${correctAnswer}, and that was the correct answer!',
        questionFeedbackIncorrect: 'Sorry! The correct answer was ${correctAnswer}'
    },

    {
        question: 'What are the six main positions on a hockey team?',
        answers: [
            '4 forwards, 1 defenceman, 1 goalie',
            '2 forwards, 3 defencemen, 1 goalie',
            '3 forwards, 2 defencemen, 1 goalie',
            '2 forwards, 2 defencemen, 2 goalies'
        ],
        correctAnswer: '3 forwards, 2 defencemen, 1 goalie',
        questionFeedbackCorrect: 'Good job! ${correctAnswer} was the correct answer!',
        questionFeedbackIncorrect: 'Sorry! The correct answer was ${correctAnswer}'
    },

    {
        question: 'How many periods are in a hockey game?',
        answers: [
            '2',
            '4',
            '3',
            '6'
        ],
        correctAnswer: '3',
        questionFeedbackCorrect: 'Fantastic! You choose ${correctAnswer} periods, and that was correct!',
        questionFeedbackIncorrect: 'Sorry! The correct answer was ${correctAnswer}'
    }


]

function startPage() {
    $(".questionAnswer").hide();
    $(".feedback").hide();
    $(".finalSection").hide();
}

//initial values so they can be incremented later
const questionNumber = 0;
const score = 0;

let selectedRadioID;


//start quiz: when quiz is started, hide start div, unhide quiz form div/append quiz form info to empty div
function startQuiz() {
    $(".startQuizButton").on('click', function () {
        $(".main").hide();
        $(".questionAnswer").show();

    });

};

// generate question
// get question from array by referencing the next question number
// attaching question div with the info from that question
function generateQuestion() {
    $(".startQuizButton").on('click', function () {
        $('.question').append(STORE[questionNumber].question); //why is it defaulting to the input? a typo? you can also select all of them
        $('.radio 0').append(STORE[questionNumber].answers[0]);
        $('.radio 1').append(STORE[questionNumber].answers[1]);
        $('.radio 2').append(STORE[questionNumber].answers[2]);
        $('.radio 3').append(STORE[questionNumber].answers[3]);

        incrementQuestionNumber();
        incrementScore();
    });
};


//increment question number
// to get 1 higher question number it should increment ++ each time the next question is generated
// for loop, max length of the amount of questions
function incrementQuestionNumber() {
    for (i = 0; i <= STORE.length; i++) {
        // each time 'submit' is hit, increment question number
        $('.submitQuestion').on('click', function () {
            $('.questionNumber').html(parseInt($('.questionNumber').html(), 10) + 1)
        })
    };

    //increment score and changes the display
    // to get 1 higher score it should increment ++ each time the "next" button is pressed AFTER a "correct feedback"
    function incrementScore(score) {
        score += score;
        score.text(score);
    };


    //this function will get the value of the id of answer selection
    function answerSelectedRadioID() {
        let selectedRadioID = $('input[type=radio]:checked').attr('id');
        return selectedRadioID;
    };




    // gets correct answer for question
    function correctAnswerMatch() {
        let x = questionNumber - 1;
        let testMatch = STORE[x].correctAnswer;
        return testMatch;
    };

    //on submit run feedback for answer selected
    // starts when submit is hit when 1 radio button is selected

    function runAnswerFeedback() {
        $(".form").on('click', function (event) {
            event.preventDefault();
            $(".questionAnswer").hide();
            $(".feedback").show();

            if (($('input[type=radio]:checked').length > 0)) {
                questionNumber += 1;

                //variables to compare the selected answer with the correct answer
                let selection = selectedRadioID()
                let answernum = testMatch()
                if (selection === answernum) {
                    questionFeedbackCorrect();
                    //increments
                    score += 1;
                    // need function calls here for updating the progress and score

                } else {
                    questionFeedbackIncorrect();
                };
                // if the current question number is 10, then on submission the final feedback page will be displayed
                if (questionNumber === 10) {
                    $('.questionAnswer, .feedback').toggleClass('hide');
                    document.getElementsByClassName(".submitQuestion")[0].innerHTML = `See Quiz Results`;
                }
                else {
                    $('.questionAnswer', '.feedback').toggleClass('hide');
                }
            }
            else {
                alert("Please select an answer");
            }
        });
    };


    //feedback for correct answer
    // starts when submit is pressed with 1 radio button selected
    // need... some kind of logic, that if correctAnswer is selected, this feedback div is appended to an empty div
    function feedbackIfCorrect() {
        let x = questionNumber - 1;
        $(".feedback").html(`${STORE[x].questionFeedbackCorrect}`);
    }

    //feeback for incorrect answer
    // starts when submit is pressed with 1 radio button selected
    // need... some kind of logic? that if correctAnswer is NOT the 1 selected, this feedback div is appended 
    // to an empty div
    function feedbackIfIncorrect() {
        let x = questionNumber - 1;
        $(".feedback").html(`${STORE[x].questionFeedbackIncorrect}`);

    }

    //what happens when the user clicks next question button
    // hides feedback and shows the question section for the next question
    function nextQuestion() {
        $('.nextQuestion').on('click', function () {
            if (questionNumber === 10) {
                $('.finalSection', '.feedback').toggleClass('hide');
                $('input[type=radio]').prop('checked', false);
                $('.score').toggleClass('score');

            }
            else {
                $('.questionAnswer, .feedback').toggleClass('hide');
                $('input[type=radio]').prop('checked', false);

                $('.question').append(STORE[questionNumber].question);
                $('.radio 0').append(STORE[questionNumber].answers[0]);
                $('.radio 1').append(STORE[questionNumber].answers[1]);
                $('.radio 2').append(STORE[questionNumber].answers[2]);
                $('.radio 3').append(STORE[questionNumber].answers[3]);

            };


        });

    };





    //start a new quiz function: when clicked will reload page to start quiz over
    // will only start when the "start over" button from the quizFinale feedback page is pressed, so
    // returns to welcome 
    function startNewQuiz() {
        $('.restart').on('click', function () {

            $('.finalSection').toggleClass('hide');
            questionNumber = 0;
            document.getElementsByClassName("question")[0].innerHTML = ``;
            document.getElementsByClassName("radio 0")[0].innerHTML = ``;
            document.getElementsByClassName("radio 1")[0].innerHTML = ``;
            document.getElementsByClassName("radio 2")[0].innerHTML = ``;
            document.getElementsByClassName("radio 3")[0].innerHTML = ``;
            document.getElementsByClassName("submitQuestion")[0].innerHTML = `Next Question`;
            $('.score').toggleClass('showScore');

        });
    };

    //run quiz functions
    function createQuizApp() {
        startPage();
        startQuiz();
        generateQuestion();
        startQuiz();
        startNewQuiz();
        nextQuestion();
        runAnswerFeedback();

    };

}
    //call main function
createQuizApp();

