let quiz = [];
let index = 0;
let score = 0;

function startQuiz(n){
quiz = quizzes[n];
index = 0;
score = 0;
load();
}

function load(){

let q = quiz[index];

document.getElementById("question").textContent = q.q;

let answers = document.getElementById("answers");
answers.innerHTML = "";

q.a.forEach((ans,i)=>{
let b = document.createElement("button");
b.textContent = ans;

b.onclick = ()=>{
if(i === q.c) score++;
document.querySelectorAll("button").forEach(x=>x.disabled=true);
updateScore();
};

answers.appendChild(b);
});

updateProgress();
updateScore();
}

function next(){
index++;

if(index >= quiz.length){
document.getElementById("question").textContent =
"Тест завершён!";

document.getElementById("answers").innerHTML = "";

return;
}

load();
}

function updateScore(){
document.getElementById("score").textContent =
`Score: ${score} / ${quiz.length}`;
}

function updateProgress(){
let p = (index / quiz.length) * 100;
document.getElementById("progress-bar").style.width = p + "%";
}
