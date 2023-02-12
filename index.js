const randomNumber1 = Math.floor(Math.random()*10);

const randomNumber2 = Math.floor(Math.random()*10);

const question = document.getElementById("question");

const form = document.getElementById("container");

const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));
const input = document.getElementById("answer-input")

if(!score){
    score = 0;
}

scoreEl.innerText = `score: ${score}`;

question.innerText = `What is ${randomNumber1} multiply by ${randomNumber2}?`

const correctAnswer = randomNumber1 * randomNumber2;

form.addEventListener("submit", ()=>{
    const userAnswer = +input.value;
    if(userAnswer === correctAnswer){
        score++;
        updateLocalStorage();
    }else{
        score--;
        updateLocalStorage();
    }
    
});


function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score));
}

