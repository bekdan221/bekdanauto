function startAnalysis() {
    const core = document.getElementById('brain-core');
    core.style.borderColor = '#ff00ff';
    core.style.boxShadow = '0 0 100px #ff00ff';
    
    let i = 0;
    const interval = setInterval(() => {
        if(i < neuralNodes.length) {
            console.log(neuralNodes[i].signal);
            alert(neuralNodes[i].signal); // Выведет сообщение на экран
            i++;
        } else {
            clearInterval(interval);
        }
    }, 1500);
}
