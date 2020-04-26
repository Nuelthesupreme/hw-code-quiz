const questions = [
    {q: " what does HTML stand for?", o: ["hey text me later","hyper text markup language", "high text makup language", "hyper text makeup language"], a: 1},
    {q: "Which of this is a string?", o: ["car","A man on the street", "Let's go for a walk","ALL of the above"], a: 3},
    {q: " which of the following is not a javascript data type?", o: ["Number","String", "Boolen","document"], a: 3},
    {q: " what is css used for?", o: ["Stying a web page","creating functions", "tesing web server","creating web payout"], a: 0},
    {q: "What is the capital of Kenya?", o: ["cairo", "nairobi", "addis ababa", "kampala"], a: 1},
]

const answeredQuestions = [];
let questionNumber = 0;
let score = 0;

function nextQuestion(){
    const questionScreen = document.getElementById('question');
    const opt1Screen = document.getElementById('opt1');
    const opt2Screen = document.getElementById('opt2');
    const opt3Screen = document.getElementById('opt3');
    const opt4Screen = document.getElementById('opt4');

    document.getElementsByName('option').forEach(r => r.checked = false)
    
    if (questionNumber < questions.length){
        const newQuestion = questions[questionNumber];
    
        questionScreen.innerText = newQuestion.q;
        opt1Screen.innerText = newQuestion.o[0];
        opt2Screen.innerText = newQuestion.o[1];
        opt3Screen.innerText = newQuestion.o[2];
        opt4Screen.innerText = newQuestion.o[3];
    
        questionNumber++;}
    else alertScore();
}

const secondsLeft = 20;
const timerInterval =0;

function callbackFunction(){
    secondsLeft--;
    timeEl.textContent = secondsLeft = "seconds left";

    if( secondsLeft === 0){
        alertScore();
    }

}

function setTime(){
timerInterval = setInterval(callbackFunction, 2000);
}


nextQuestion()

function answerQuestion(answerGiven){
    if(answerGiven == questions[questionNumber-1].a) {score += 1}
    else{} //do something to the timer
    nextQuestion();
}


function alertScore(){
    const hsRaw = localStorage.getItem('highscore');
    const hsSemi = hsRaw.split(" ").pop().split("/").map(x => parseInt(x, 10));
    const hs =  hsSemi[0]/hsSemi[1];
    const us = score/questions.length;
    console.log(hsSemi, hs, us)
    if (us > hs || (us == hs && questions.length > hsSemi[1])){
        const name = prompt("Congratulations! You beat the highscore. Enter your name to save the new highscore: ");
        localStorage.setItem('highscore', name+" - "+score+"/"+questions.length);
    }
    else alert("Your score is "+score+"/"+questions.length+'\n'+"The highscore is "+hsRaw)
    location.reload();
}

