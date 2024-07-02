const mainGameButton = document.getElementById('mainGameButton'),
      clickCounterSpan = document.getElementById('clickCounterSpan');
const starterHints = document.getElementById("starterHints");

starterHints.textContent = "Get to 20 Clicks";
let currentClickCount = 0;
let openshop = 20;
let fetchClickCount = localStorage.getItem('clickCount');
console.log(fetchClickCount);


if (!fetchClickCount) {
    clickCounterSpan.textContent = "You need to click a bit!";
    }else if  (fetchClickCount >= openshop) {
}else {
    currentClickCount = fetchClickCount;
    clickCounterSpan.textContent = fetchClickCount;
}


mainGameButton.addEventListener("click", userClickCounter);



function userClickCounter() {
    currentClickCount++;
    localStorage.setItem('clickCount', currentClickCount.toString());
    clickCounterSpan.textContent = currentClickCount.toString();

    if (currentClickCount >= openshop) {
        alert("Well done! The shop is now available!")
        window.location.reload();

    }
}


