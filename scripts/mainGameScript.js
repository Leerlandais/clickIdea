const mainGameButton = document.getElementById('mainGameButton'),
      clickCounterSpan = document.getElementById('clickCounterSpan');
const starterHints = document.getElementById("starterHints");

starterHints.textContent = "Get to 20 Clicks";
let currentClickCount = 0;


mainGameButton.addEventListener("click", userClickCounter);



function userClickCounter() {
    currentClickCount++;
    console.log(currentClickCount);
    clickCounterSpan.textContent = currentClickCount.toString();

    if (currentClickCount >= 20) {
        alert("Well done!")
        window.location.reload();

    }
}


