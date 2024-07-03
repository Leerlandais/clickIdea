const mainGameButton = document.getElementById('mainGameButton'),
      clickCounterSpan = document.getElementById('clickCounterSpan'),
      clickCounterAll = document.getElementById('clickCounterAll'),
      clickCounterSpeed = document.getElementById('clickCounterSpeed'),
      starterHints = document.getElementById("starterHints"),
      shopHolder = document.querySelector(".shopHolder");

let userClickCount = 0,
    userClickReset = 0,
    recordCount =  0,
    clickCount = 0,
    clickSpeed = 0,
    speedBoost = [0,0,0,0,0,0,0,0]; // Malheureusement, je ne connais pas encore assez d'Objet Orienté en JS pour le tenter - à revoir bientôt



// Si jeu est sur un nouvelle ordi/navigator, création de Storage pour eviter d'erreurs
if (localStorage.getItem("clickCount") === null
    || localStorage.getItem("clickSpeed") === null
    || localStorage.getItem('currentTime') === null)
    {
    localStorage.setItem("clickCount", "0");
    localStorage.setItem("clickSpeed", "0");
    localStorage.setItem("currentTime", Date.now().toString());
        starterHints.textContent = "You need to click a bit!";
        recordGame();
    }else {
    clickCount = parseInt(localStorage.getItem("clickCount"));
    clickSpeed = parseInt(localStorage.getItem("clickSpeed"));
    clickCounterAll.textContent = localStorage.getItem("clickCount");
    clickCounterSpeed.textContent = localStorage.getItem("clickSpeed");
    recordGame();
}



// intérval pour l'enrégistrement du jeu toutes les 10 seconds
const gameRecordInterval = setInterval(() => {
    recordGame();
},10000)


mainGameButton.addEventListener('click', function () {
    userClickCount++;
    userClickReset++
clickCounterSpan.textContent = userClickCount.toString();
})

function recordGame() {
    recordCount++;
     clickSpeed = localStorage.getItem("clickSpeed");
     clickCount = localStorage.getItem("clickCount");
     console.log(userClickReset);
    clickCount >= 5 || userClickReset >= 5 ? shopHolder.classList.remove('hidden') : shopHolder.classList.add('hidden');
    let lastRecordingTime = localStorage.getItem('currentTime');
    let timeDiff = Date.now() - parseInt(lastRecordingTime);
    timeDiff = Math.round(timeDiff / 999);
    let bonusClicks = parseInt(clickSpeed) !== 0 ? (parseInt(clickSpeed) * timeDiff + userClickReset) :  0;
    userClickReset = 0;
    let newCount = ((parseInt(clickCount) + bonusClicks)).toString();

    console.log(recordCount+ " : record made");
    localStorage.setItem('currentTime', Date.now().toString())
    localStorage.setItem('clickSpeed', clickSpeed.toString());
    localStorage.setItem("clickCount", newCount.toString());
    clickCounterAll.textContent = localStorage.getItem("clickCount");
    clickCounterSpan.textContent = userClickCount.toString();
}
clickCounterSpan.textContent = "something is wrong with how clickSpeed is registered" +
    "";
