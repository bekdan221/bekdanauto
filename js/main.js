let currentCategory = 'it';
let currentQIndex = 0;

function setCategory(cat) {
    currentCategory = cat;
    currentQIndex = 0;
    loadQuestion();
    console.log("Категория выбрана:", cat);
}

function loadQuestion() {
    const quizBox = document.getElementById('quiz-box');
    const qData = quizData[currentCategory];
    
    if(!qData || currentQIndex >= qData.length) {
        document.getElementById('question').innerText = "Тест завершен!";
        document.getElementById('answers').innerHTML = "";
        return;
    }

    const q = qData[currentQIndex];
    document.getElementById('question').innerText = q.q;
    const container = document.getElementById('answers');
    container.innerHTML = '';

    q.a.forEach((text, idx) => {
        const btn = document.createElement('div');
        btn.className = 'btn';
        btn.innerText = text;
        btn.onclick = () => {
            if(idx === q.correct) {
                changeColor(0x00ff00);
                alert("Верно!");
            } else {
                changeColor(0xff0000);
                alert("Ошибка!");
            }
            currentQIndex++;
            loadQuestion();
        };
        container.appendChild(btn);
    });
}
