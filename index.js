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
    correctAnswer: 'Puck'
    // get an icon for correct/ incorrect answers???

},

{
    question: 'How does a play start during a hockey game?',
    answers: [
        'The referee tosses up the puck and whichever team in a face off can get it',
        'Jump ball',
        'Tip the ball',
        'Face off'
    ],
    correctAnswer: 'Face off'

},

{
    question: 'What is the most critical gear for playing hockey?',
    answers: [
        'Helmet with face mask, elbow and knee pads, skates',
        'Extra laces, water bottle, tape',
        'Hockey bag, skate guard',
        'Jersey, stick, shoulder pads'
    ],
    correctAnswer: 'Helmet with face mask, elbow and knee pads, skates'

    // safety first!
},

{
    question: 'What is an interference?',
    answers: [
        'Performing an action that halts play',
        'When a player uses his body to impede the progress of an opponent with no effort to play the puck',
        'When a player impedes the puck carrier',
        'When a player stands in front of the goalie'
    ],
    correctAnswer: 'When a player uses his body to impede the progress of an opponent with no effort to play the puck'
},

{
    question: 'What is icing?',
    answers: [
        'When a player shoots the puck from all the way across the field to across the opposing team’s goal line without the puck being touched',
        'When a player shoots the puck from behind the center red line, all the way across the opposing team’s goal line without the puck being touched',
        'When a player skids on the ice hard enough to cause other players problems skating',
        'When a player slams another player into the ice'
    ],
    correctAnswer: 'When a player shoots the puck from behind the center red line, all the way across the opposing team’s goal line without the puck being touched'
},

{
    question: 'What hand should you use as your top hand on the hockey stick?',
    answers: [
        'Dominant hand',
        'Non-dominant hand',
        'Dominant foot',
        'Non-dominant foot'
    ],
    correctAnswer: 'Dominant hand'
},

{
    question: 'What are the four main types of shots?',
    answers: [
        'Slap shot, wrist shot, snap shot, backhand shot',
        'Snap shot, buck shot, crack shot, lick shot',
        'Crack shot, buck shot, backhand shot, elbow shot',
        'Elbow shot, knee shot, wrist shot, hand shot'
    ],
    correctAnswer: 'Slap shot, wrist shot, snap shot, backhand shot'
},

{
    question: 'What is the most important skill as a hockey player?',
    answers: [
        'Shooting',
        'Puck controlling',
        'Agility',
        'Skating skills'
    ],
    correctAnswer: 'Skating skills'
},

{
    question: 'What are the six main positions on a hockey team?',
    answers: [
        '4 forwards, 1 defenceman, 1 goalie',
        '2 forwards, 3 defencemen, 1 goalie',
        '3 forwards, 2 defencemen, 1 goalie',
        '2 forwards, 2 defencemen, 2 goalies'
    ],
    correctAnswer: '3 forwards, 2 defencemen, 1 goalie'
},

{
    question: 'How many periods are in a hockey game?',
    answers: [
        '2',
        '4',
        '3',
        '6'
    ],
    correctAnswer: '3'
}


]


//initial values so they can be incremented later
const questionNumber = 0;
const score = 0;



//start quiz: when quiz is started, hide start div, unhide quiz form div/append quiz form info to empty div?
function startQuiz() {
$(".startQuizButton").on('click', function() {
    $(".main").hide();
    $(".questionAnswer").show();
});

};



// generate question
// get question from array by referencing the next question number
// attaching question div with the info from that question

function generateQuestion() {
$(".startQuizButton").on('click', function() {
    $(".questionAnswer").append(STORE[questionNumber].question);
    $(".questionAnswer").append(STORE[questionNumber].answers[0,1,2,3]);
});
};

//increment question number
// to get 1 higher question number it should increment ++ each time the next question is generated
// for loop, max length of the amount of questions, 
function incrementQuestionNumber() {

}

//increment score
// to get 1 higher score it should increment ++ each time the "next" button is pressed AFTER a "correct feedback"
function incrementScore() {
$(".score").click(increment);
}
// ^ does the above achieve the same thing as updateScoreText? and thus the second one isn't needed?

//render question in DOM
function renderQuizQuestion() {

}

//on submit run feedback for answer selected
// starts when submit is hit when 1 radio button is selected
//should use 

function runAnswerFeedback() {

}


//feedback for correct answer
// starts when submit is pressed with 1 radio button selected
// need... some kind of logic? that if correctAnswer is selected, this feedback div is appended to an empty div
function feedbackIfCorrect() {

}

//feeback for incorrect answer
// starts when submit is pressed with 1 radio button selected
// need... some kind of logic? that if correctAnswer is NOT the 1 selected, this feedback div is appended 
// to an empty div
function feedbackIfIncorrect() {

}

//update score text
function updateScoreText() {


}


//what happens when the user clicks next
// 
// Does function generateQuestion handle this?????? Look it up!
function nextQuestion() {

}

//final feedback page when quiz is over
//generates html to DOM based on their score -> if perfect, something, if higher than 7, append
// to empty div stuff about winning, if lower than 5, append to empty div feedback about their finale score
// and needing some more work before stepping onto the ice
function quizFinale() {
// definitely an if / else / else if loop based on the finale score value after all 10 questions are answered

}

//start a new quiz function: when clicked will reload page to start quiz over
// will only start when the "start over" button from the quizFinale feedback page is pressed, so
// perhaps a 
function startNewQuiz() {

}

//run quiz functions
function createQuizApp() {
    renderQuizQuestion();
    startQuiz();
    startNewQuiz();
    nextQuestion();
    runAnswerFeedback();

}

//call main function
$(createQuizApp);
