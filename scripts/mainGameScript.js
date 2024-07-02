const mainGameButton = document.getElementById('mainGameButton'),
      clickCounterSpan = document.getElementById('clickCounterSpan');
const starterHints = document.getElementById("starterHints");

starterHints.textContent = "Get to 20 Clicks";
let currentClickCount = 0;
let fetchClickCount = localStorage.getItem('clickCount');
console.log(fetchClickCount);


if (!fetchClickCount) {
    clickCounterSpan.textContent = "You need to click a bit!";
}else {
    clickCounterSpan.textContent = fetchClickCount;
}


mainGameButton.addEventListener("click", userClickCounter);



function userClickCounter() {
    currentClickCount++;
    localStorage.setItem('clickCount', currentClickCount);
    clickCounterSpan.textContent = currentClickCount.toString();

    if (currentClickCount >= 20) {
        alert("Well done!")
        window.location.reload();

    }
}


