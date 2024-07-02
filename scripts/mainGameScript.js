const mainGameButton = document.getElementById('mainGameButton');

let currentClickCount = 0;


mainGameButton.addEventListener("click", userClickCounter);



function userClickCounter() {
    currentClickCount++;
    console.log(currentClickCount);
}


