let targetNumber = 24;
let currentSum = 0;
let expressionString = "0";

const targetEl = document.getElementById("target-number");
const sumEl = document.getElementById("current-sum");
const expressionEl = document.getElementById("expression");
const messageEl = document.getElementById("message");

function addNumber(num) {
    if (currentSum === 0 && expressionString === "0") {
        currentSum = num;
        expressionString = num.toString();
    } else {
        currentSum += num;
        expressionString += " + " + num;
    }
    updateUI();
}

function updateUI() {
    sumEl.innerText = currentSum;
    expressionEl.innerText = expressionString;
}

function checkResult() {
    if (currentSum === targetNumber) {
        messageEl.style.color = "#a7f3d0"; // Soft mint success color
        messageEl.innerText = "🎉 Perfect! You matched the target!";
    } else if (currentSum > targetNumber) {
        messageEl.style.color = "#fecaca"; // Soft red error warning
        messageEl.innerText = "❌ Too high! Reset and try again.";
    } else {
        messageEl.style.color = "#fde047"; // Soft yellow warning
        messageEl.innerText = "⚠️ Not enough yet, keep adding!";
    }
}

function resetGame() {
    currentSum = 0;
    expressionString = "0";
    messageEl.innerText = "";
    updateUI();
}