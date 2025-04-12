let tries = 3;
let answered = false;

document.getElementById("startBtn").onclick = () => {
    document.getElementById("startbox").style.display = "none";
    document.getElementById("quizBox").style.display = "block";
};

const checkAnswer = (button, isCorrect) => {
    if (answered || tries === 0) return;

    if (isCorrect) {
        button.classList.add("correct");
        answered = true;
        disableAll();
    } else {
        button.classList.add("inCorrect");
        tries--;
        if (tries === 0) {
            disableAll();
        }
    }
};

const disableAll = () => {
    document.querySelectorAll("#quizBox .btn").forEach(btn => btn.disabled = true);
};