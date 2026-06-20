let quiz=[];
let i=0;
let score=0;
let answered=false;

function startApp(){
document.getElementById("titleScreen").style.display="none";
document.getElementById("game").style.display="block";
}

function startQuiz(n){
quiz = quizzes[n];
i=0;
score=0;
load();
}

function load(){

answered=false;

let q = quiz[i];
document.getElementById("q").textContent = q.q;

let ans = document.getElementById("answers");
ans.innerHTML="";

ans.style.display="grid";
ans.style.gridTemplateColumns="1fr 1fr";

q.a.forEach((text,index)=>{

let b=document.createElement("button");
b.textContent=text;

b.onclick=()=>{

if(answered) return;
answered=true;

let all=document.querySelectorAll("#answers button");
all.forEach(x=>x.disabled=true);

if(index===q.c){
b.style.background="green";
score++;
}else{
b.style.background="red";

all[q.c].style.background="green";
}

update();
};

ans.appendChild(b);
});

progress();
update();
}

function next(){

if(!answered) return;

if(i<quiz.length-1){
i++;
load();
}else{
document.getElementById("q").textContent="ТЕСТ ЗАВЕРШЁН";
document.getElementById("answers").innerHTML="";
}
}

function update(){
document.getElementById("score").textContent =
`Score: ${score} / ${quiz.length}`;
}

function progress(){
let p=(i/quiz.length)*100;
document.getElementById("bar").style.width=p+"%";
}
