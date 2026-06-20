let quiz = [];
let i = 0;
let score = 0;
let answered = false;

function startQuiz(n){
  quiz = quizzes[n];
  i = 0;
  score = 0;
  load();
}

/* 🔀 перемешивание */
function shuffle(arr){
  return arr.sort(() => Math.random() - 0.5);
}

function load(){

  answered = false;

  let q = quiz[i];
  document.getElementById("q").textContent = q.q;

  let ans = document.getElementById("answers");
  ans.innerHTML = "";

  /* делаем варианты */
  let options = q.a.map((text, index) => {
    return { text, index };
  });

  options = shuffle(options);

  ans.style.display = "grid";
  ans.style.gridTemplateColumns = "1fr 1fr";
  ans.style.gap = "10px";

  options.forEach(opt => {

    let b = document.createElement("button");
    b.textContent = opt.text;

    /* отмечаем правильный */
    b.dataset.correct = (opt.index === q.c);

    b.onclick = () => {

      if (answered) return;
      answered = true;

      let all = document.querySelectorAll("#answers button");
      all.forEach(x => x.disabled = true);

      // правильный ответ
      if (opt.index === q.c) {
        b.style.background = "green";
        b.innerHTML = "✔ " + opt.text;
        score++;
      } else {
        // неправильный
        b.style.background = "red";
        b.innerHTML = "❌ " + opt.text;

        // показать правильный
        all.forEach(btn => {
          if (btn.dataset.correct === "true") {
            btn.style.background = "green";
            btn.innerHTML = "✔ " + btn.textContent;
          }
        });
      }

      update();
    };

    ans.appendChild(b);
  });

  progress();
  update();
}

function next(){

  if (!answered) return;

  if (i < quiz.length - 1) {
    i++;
    load();
  } else {
    document.getElementById("q").textContent = "ТЕСТ ЗАВЕРШЁН 🎉";
    document.getElementById("answers").innerHTML = "";
  }
}

function update(){
  document.getElementById("score").textContent =
    `Score: ${score} / ${quiz.length}`;
}

function progress(){
  let p = (i / quiz.length) * 100;
  document.getElementById("bar").style.width = p + "%";
}
