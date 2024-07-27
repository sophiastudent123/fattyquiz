const questions = [
    {
        question: "what is fatty bday",
        answers: [
            {text: "apr 3", correct: false},
            {text: "spet 5 ", correct: false},
            {text: "july 22", correct: true},
            {text: "julky 23", correct: false},
        ]
    },
    {
        question: "what MAJOR",
        answers: [
            {text: "BUSINES EW", correct: false},
            {text: "MECHINCAL ENGEIERR ", correct: false},
            {text: "SOWFTWARE ENGINNER", correct: true},
            {text: "ART AND HISTROY ", correct: false},
        ]
    },
    {
        question: "what is fatty GF",
        answers: [
            {text: "DESTINY", correct: false},
            {text: "SOPHIA ", correct: false},
            {text: "stacy", correct: false},
            {text: "sophia cutie", correct: true},
        ]
    },
    {
        question: "how many sis",
        answers: [
            {text: "1000", correct: false},
            {text: "SOPHIA ", correct: false},
            {text: "1", correct: false},
            {text: "2", correct: true},
        ]
    },
    {
        question: "where fatty live BE SPECIEFIC ",
        answers: [
            {text: "brampton", correct: false},
            {text: "st thomsas", correct: true},
            {text: "canada", correct: false},
            {text: "-34.625536, -58.470028", correct: false},
        ]
    },
    {
        question: "what fatty interest ",
        answers: [
            {text: "brampton", correct: false},
            {text: "anime kppoop sophia cutie pattos reading  aEW..", correct: true},
            {text: "nothngi bc he fat", correct: false},
            {text: "philipines minstry of health department", correct: false},
        ]
    },
    {
        question: "what date he likes ",
        answers: [
            {text: "brampton", correct: false},
            {text: "ONLY sushi data", correct: false},
            {text: "ONLTY studying date", correct: false},
            {text: "he like every date with sophia cutie patootes", correct: true},
        ]
    },
    {
        question: "what goal in life??? ",
        answers: [
            {text: "want marry sophia cutie patoots honey and software joband make money for good life", correct: true},
            {text: "anime girl boobies", correct: false},
            {text: "manga books library", correct: false},
            {text: "be homeless", correct: false},
        ]
    },
    {
        question: "now about me.. what my fav song  ",
        answers: [
            {text: "hey bb saiko", correct: false},
            {text: "columbia quevedo", correct: true},
            {text: "how sweet new jeans", correct: false},
            {text: "suopernova aespa", correct: false},
        ]
    },
    {
        question: "how fatty  ",
        answers: [
            {text: "hes not fat..", correct: false},
            {text: "only little fatty", correct: false},
            {text: "MOSTTT FATTY IN THE WORLF!!", correct: true},
            {text: "avg fat ig", correct: false},
        ]
    }
];


const wrongTextFeedBack = ['how could u...','you dont know fatty ;/',
     'study MORE :rage:', 'howd u get it wrong', 'NOOOOO!!!!!!!', 'fatty is mine',
    'it so ez how not know', 'argentina!!!!!','i miss my fatty', 'why ;/','you must know this about fatty;/',
'NOOOOOOOO FATTY NOT LIKE THAT!!!','poop','fatty noooo','you must sutyd more to earn fatty prviliage',
'good try..'];

const questionElement  = document.getElementById("title");
const answerButton  = document.getElementById("answer-buttons");
const nextButton  = document.getElementById("next-btn");
const text = document.getElementById('text');
const startButton = document.getElementById('start-btn');

let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    document.getElementById('welcomemessage').style.display = 'none';
    questionElement.removeAttribute('title');
    questionElement.setAttribute('id','question');
    answerButton.style.display ="block";
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo+ ". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click',selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    text.style.display = "none";
    while (answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect){
        selectedBtn.classList.add("correct"); //adding classes for styling of incorrect and correct elements
        score++;
        text.textContent = "yay! good job !!!";
        text.style.display = 'block';
    }
    else {
        selectedBtn.classList.add("incorrect");
        let randomNum = Math.floor(Math.random() * 15)+1;
        text.textContent = wrongTextFeedBack[randomNum];
        text.style.display = 'block';

    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        showQuestion();
    }
    else {
        showScore();
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML = "u got "+score+" out of "+questions.length;
    if (score < 5){
        text.textContent = "you dont know fatty..";
        text.style.display = 'block';
    }
    else if (score === 5){
        text.textContent = "you only know a little fatty..";
        text.style.display = 'block';
    }
   else  if (score < 8){
        text.textContent = "fine u r fatty friend but not sophia cutie level";
        text.style.display = 'block';
    }
    else  if (score > 8){
        text.textContent = "YAYYYA u know fatty but hes always gonna be sophia cuties fatty";
        text.style.display = 'block';
    }
    
    nextButton.innerHTML = "[lay ahgain";
    nextButton.style.display = "block";
}






nextButton.addEventListener('click', ()=>{
    text.style.display = "none";
    if (currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else {
        startQuiz();
    }
})

startButton.addEventListener('click',()=> {
    startButton.style.display = "none";
    startQuiz();
})












































































/*const startButton = document.querySelector(".js-button4");
const buttonOne = document.querySelector(".js-button");
const buttonTwo = document.querySelector(".js-button2");
const buttonThree = document.querySelector(".js-button3");
let question = document.querySelector('.question');
let score = 0;
let hasStarted = false;
const nextButton = document.querySelector(".next-button");

startButton.addEventListener('click', ()=>{
    score = 0;
    document.querySelector('.score2').textContent= score;
    document.querySelector('.wrong').textContent= "";
    hasStarted = true;
    startGame()
});
nextButton.addEventListener('click', ()=>{
    if (hasStarted){
        startGame()
    }
    else {
        return;
    }
})

function generateRandomAnswer(){
    let num1 = Math.floor(Math.random() * 11);
    let num2 = Math.floor(Math.random() * 11);
    question.textContent = num1 + "+"+num2;
    let answer = num1 + num2;
    return answer;

}


function startGame(){
    
    let answer = generateRandomAnswer();
    let randomChoice = Math.floor(Math.random() * 3)+1;
   console.log(randomChoice);
   
    if (randomChoice === 1){
        buttonOne.textContent = answer;
        buttonTwo.textContent = Math.floor(Math.random() * 11);
        buttonThree.textContent = Math.floor(Math.random() * 11);
    }
    else if (randomChoice === 2){
        buttonOne.textContent = Math.floor(Math.random() * 11);
        buttonTwo.textContent = answer;
        buttonThree.textContent = Math.floor(Math.random() * 11);
    }
    else if (randomChoice === 3){
        buttonOne.textContent = Math.floor(Math.random() * 11);
        buttonTwo.textContent = Math.floor(Math.random() * 11);
        buttonThree.textContent = answer;
       
    }

    buttonOne.addEventListener('click',()=>{
        console.log("butone") 
        isCorrect(buttonOne.textContent,answer)
       
    } );
    buttonTwo.addEventListener('click',()=>{
        console.log("buttwo") 
        isCorrect(buttonTwo.textContent,answer)
         
    } );
    buttonThree.addEventListener('click',()=>{
        console.log("butthree") 
        isCorrect(buttonThree.textContent,answer) 
       
    } );
   


}



function isCorrect(choice,answer){
    choice = Number(choice);
    if (choice===answer){
        document.querySelector('.wrong').textContent = "";
        score++;
        document.querySelector('.score2').textContent= score;
        console.log("one")
        
    }
    else {
        document.querySelector('.wrong').textContent= "Wrong!";
        console.log("two")
       
    }
}

*/