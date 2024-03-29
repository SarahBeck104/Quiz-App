$(document).ready(function(){

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
        correctAnswer: '2',
        questionFeedbackCorrect: `Great! You choose 'Puck', and that was the correct answer!`,
        questionFeedbackIncorrect: `Sorry! The correct answer was 'Puck'`
    },
        
    {
        question: 'How does a play start during a hockey game?',
        answers: [
            'The referee tosses up the puck and whichever team in a face off can get it',
            'Jump ball',
            'Tip the ball',
            'Face off'
        ],
        correctAnswer: '3',
        questionFeedbackCorrect: `Great! You choose 'Face off', and that was the correct answer!`,
        questionFeedbackIncorrect: `Sorry! The correct answer was 'Face off'.`
    },

    {
        question: 'What is the most critical gear for playing hockey?',
        answers: [
            'Helmet with face mask, elbow and knee pads, skates',
            'Extra laces, water bottle, tape',
            'Hockey bag, skate guard',
            'Jersey, stick, shoulder pads'
        ],
        correctAnswer: '0',
        questionFeedbackCorrect: `Awesome! You choose 'Helmet with face mask, elbow and knee pads, skates', which is correct!`,
        questionFeedbackIncorrect: `Sorry! The correct answer was 'Helmet with face mask, elbow and knee pads, skates'.`
    },

    {
        question: 'What is an interference?',
        answers: [
            'Performing an action that halts play',
            'When a player uses his body to impede the progress of an opponent with no effort to play the puck',
            'When a player impedes the puck carrier',
            'When a player stands in front of the goalie'
        ],
        correctAnswer: '1',
        questionFeedbackCorrect: `Fantastic! You choose 'When a player uses his body to impede the progress of an opponent with no effort to play the puck', and that was the correct answer!`,
        questionFeedbackIncorrect: `Sorry! The correct answer was 'When a player uses his body to impede the progress of an opponent with no effort to play the puck'.`
    },

    {
        question: 'What is icing?',
        answers: [
            'When a player shoots the puck from all the way across the field to across the opposing team’s goal line without the puck being touched',
            'When a player shoots the puck from behind the center red line, all the way across the opposing team’s goal line without the puck being touched',
            'When a player skids on the ice hard enough to cause other players problems skating',
            'When a player slams another player into the ice'
        ],
        correctAnswer: '1',
        questionFeedbackCorrect: `Great! 'When a player shoots the puck from behind the center red line, all the way across the opposing team’s goal line without the puck being touched' was the correct answer!`,
        questionFeedbackIncorrect: `Sorry! The correct answer was 'When a player shoots the puck from behind the center red line, all the way across the opposing team’s goal line without the puck being touched'.`
    },

    {
        question: 'What hand should you use as your top hand on the hockey stick?',
        answers: [
            'Dominant hand',
            'Non-dominant hand',
            'Dominant foot',
            'Non-dominant foot'
        ],
        correctAnswer: '0',
        questionFeedbackCorrect: `Nice one! You choose 'Dominant hand'', and that was the correct answer!`,
        questionFeedbackIncorrect: `Sorry! The correct answer was 'Dominant hand'.`
    },

    {
        question: 'What are the four main types of shots?',
        answers: [
            'Slap shot, wrist shot, snap shot, backhand shot',
            'Snap shot, buck shot, crack shot, lick shot',
            'Crack shot, buck shot, backhand shot, elbow shot',
            'Elbow shot, knee shot, wrist shot, hand shot'
        ],
        correctAnswer: '0',
        questionFeedbackCorrect: `Cool! 'Slap shot, wrist shot, snap shot, backhand shot' was the correct answer!`,
        questionFeedbackIncorrect: `Sorry! The correct answer was 'Slap shot, wrist shot, snap shot, backhand shot'.`
    },

    {
        question: 'What is the most important skill as a hockey player?',
        answers: [
            'Shooting',
            'Puck controlling',
            'Agility',
            'Skating skills'
        ],
        correctAnswer: '3',
        questionFeedbackCorrect: `Nice! You choose 'Skating skills', and that was the correct answer!`,
        questionFeedbackIncorrect: `Sorry! The correct answer was 'Skating skills'.`
    },

    {
        question: 'What are the six main positions on a hockey team?',
        answers: [
            '4 forwards, 1 defenceman, 1 goalie',
            '2 forwards, 3 defencemen, 1 goalie',
            '3 forwards, 2 defencemen, 1 goalie',
            '2 forwards, 2 defencemen, 2 goalies'
        ],
        correctAnswer: '2',
        questionFeedbackCorrect: `Good job! '3 forwards, 2 defencemen, 1 goalie' was correct!`,
        questionFeedbackIncorrect: `Sorry! The correct answer was '3 forwards, 2 defencemen, 1 goalie'.`
    },

    {
        question: 'How many periods are in a hockey game?',
        answers: [
            '2',
            '4',
            '3',
            '6'
        ],
        correctAnswer: '2',
        questionFeedbackCorrect: `Fantastic! You choose '3' periods, and that was correct!`,
        questionFeedbackIncorrect: `Sorry! The correct answer was '3' periods.`
    }


]

function startPage() {
    $(".questionAnswer").hide();
    $(".feedback").hide();
    $(".questionButton").hide();
    $(".finalSection").hide();
    $('.questionNumber').html(questionNumber + "/" + STORE.length)
}

//initial values so they can be incremented later
let questionNumber = 0;
let score = 0;

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
    $('.question').html(STORE[questionNumber].question);
    $('.radio0 .the-answer').html(STORE[questionNumber].answers[0]);
    $('.radio1 .the-answer').html(STORE[questionNumber].answers[1]);
    $('.radio2 .the-answer').html(STORE[questionNumber].answers[2]);
    $('.radio3 .the-answer').html(STORE[questionNumber].answers[3]);
        incrementQuestionNumber();
    });
};

//increment question number
// to get 1 higher question number it should increment ++ each time the next question is generated
// for loop, max length of the amount of questions
function incrementQuestionNumber() {
    $('.questionNumber').html(questionNumber+1 + "/" + STORE.length)
};

//increment score and changes the display
// to get 1 higher score it should increment ++ each time the "next" button is pressed AFTER a "correct feedback"
function incrementScore() {
    score++
    $('.score').text(score)
};
    

//on submit run feedback for answer selected
// starts when submit is hit when 1 radio button is selected
function runAnswerFeedback() {
    $("#form").on('submit', function (event) {
        event.preventDefault();
        let selectedRadioID = $('input:checked');
        let answer = selectedRadioID.val();
        let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
        $(".questionAnswer").hide();
        $(".feedback").show();
        $(".questionButton").show();
        if (answer === correctAnswer) {
            selectedRadioID.parent().addClass('correct'); 
                feedbackIfCorrect();
        } else {
                selectedRadioID.parent().addClass('incorrect'); 
                feedbackIfIncorrect();
            }
            });
    };
        
//feedback for correct answer
// starts when submit is pressed with 1 radio button selected
// need logic, that if correctAnswer is selected, this feedback div is appended to an empty div
function feedbackIfCorrect() {
    $(".feedback").html(`${STORE[questionNumber].questionFeedbackCorrect}`);
        incrementScore();
    };

//feeback for incorrect answer
// starts when submit is pressed with 1 radio button selected
// need logic, that if correctAnswer is NOT the 1 selected, this feedback div is appended to an empty div
function feedbackIfIncorrect() {
    $(".feedback").html(`${STORE[questionNumber].questionFeedbackIncorrect}`);
    };

//what happens when the user clicks next question button
// hides feedback and shows the question section for the next question
function nextQuestion() {
    $('.nextQuestion').on('click', function () { 
        $(".questionAnswer").show();
        $(".feedback").hide();
        $(".questionButton").hide();
            if (questionNumber === 9) {
                $('.questionAnswer').hide();
                $('.finalSection').show();
                $('input[type=radio]').prop('checked', false);
                $('.score').toggleClass('score');
                startNewQuiz();
                
                    if (score == 10) {
                        $('.finalSection').html(`<div class="results correctFeedback"><h3>You're perfect!</h3><img src="https://cdn4.iconfinder.com/data/icons/hockey-outline/100/h-10-512.png" alt="stanley cup"/><p>You got ${score} / 10</p><p>You're a superstar on the ice! Get out there and join the champions!</p><button class="restart">Restart Quiz</button></div>`);
                    } else if (score < 10 && score >= 5) {
                        $('.finalSection').html(`<div class="results correctFeedback"><h3>Great game!</h3><p>You got ${score} / 10</p><p>You're a star contender! Look into the sport a little more and you'll be Stanley Cup material!</p><button class="restart">Restart Quiz</button></div>`);
                    } else {
                        $('.finalSection').html(`<div class="results correctFeedback"><h3>Sorry, not enough to pass!</h3><p>You got ${score} / 10</p><p>With more experience and study in hockey this quiz will be no problem for you.</p><button class="restart">Restart Quiz</button></div>`);
                    }
                }
            else {
                $('.feedback').hide();
                questionNumber++
                incrementQuestionNumber();
                $('.question').html(STORE[questionNumber].question);
                $('.radio0 .the-answer').html(STORE[questionNumber].answers[0]);
                $('.radio1 .the-answer').html(STORE[questionNumber].answers[1]);
                $('.radio2 .the-answer').html(STORE[questionNumber].answers[2]);
                $('.radio3 .the-answer').html(STORE[questionNumber].answers[3]);
            };
        });
    };
    
//start a new quiz function: when clicked will reload page to start quiz over
// will only start when the "start over" button from the quizFinale feedback page is pressed
// returns to welcome 
function startNewQuiz() {
    $("main").on('click', '.restart', function(event) {
        location.reload();
        });
    }

//run quiz functions
function createQuizApp() {
        startPage();
        startQuiz();
        generateQuestion();
        runAnswerFeedback(); 
        nextQuestion();
    };


//call main function
createQuizApp();
});
