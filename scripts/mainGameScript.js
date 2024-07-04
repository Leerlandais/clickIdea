
const mainGameButton = document.getElementById('mainGameButton'),
      clickCounterSpan = document.getElementById('clickCounterSpan'),
      clickCounterAll = document.getElementById('clickCounterAll'),
      clickCounterSpeed = document.getElementById('clickCounterSpeed'),
      starterHints = document.getElementById("starterHints"),
      shopHolder = document.querySelector(".shopHolder"),
      wipeGameButton = document.getElementById('wipeGameButton');

let userClickCount = 0, // pour compter clicks sur cette session
    userClickReset = 0, // pour compter clicks entre enregistrements
    recordCount =  0,   // pas nécessaire mais j'aime compter
    clickCount = 0,     // pour afficher le totale clicks (user et auto) depuis début
    clickSpeed = 1,     // vitesse de auto-click
    clickSize = 1,      // efficacité de click
    speedBoost = [0,0,0,0,0,0,0,0]; // Malheureusement, je ne connais pas encore assez d'Objet Orienté en JS pour le tenter - à revoir bientôt



// Si jeu est sur un nouvelle ordi/navigator, création de Storage pour eviter d'erreurs
if (localStorage.getItem("clickCount") === null
    || localStorage.getItem("clickSpeed") === null)
    {
        console.log("ONE OF THREE STORAGE = NULL");
    localStorage.setItem("clickCount", "0");
    localStorage.setItem("clickSpeed", "0");
    localStorage.setItem("currentTime", Date.now().toString());
        starterHints.textContent = "You need to click a bit!";
        recordGame();
    }else {
    console.log("STORAGE FOUND");
    clickCount = parseInt(localStorage.getItem("clickCount"));
    clickSpeed = parseInt(localStorage.getItem("clickSpeed"));
    clickCounterAll.textContent = clickCount.toString();
    clickCounterSpeed.textContent = localStorage.getItem("clickSpeed");
    recordGame();
}



// intérval pour l'enrégistrement du jeu toutes les 10 seconds
const gameRecordInterval = setInterval(() => {
    recordGame();
},1000)

wipeGameButton.addEventListener('click', function(){
    if (confirm("Erase Game?")) {

        localStorage.clear();
        window.location.reload();
        clearInterval(gameRecordInterval);
    }
});
mainGameButton.addEventListener('click', function () {
    userClickCount = userClickCount + clickSize;
    userClickReset = userClickReset + clickSize;
clickCounterSpan.textContent = userClickCount.toString();
})

function recordGame() {
        recordCount++;
     clickSpeed = parseInt(localStorage.getItem("clickSpeed"));
     clickCount = parseInt(localStorage.getItem("clickCount")) + userClickReset;
    console.log(clickSpeed, clickCount + " : COUNTERS");
     console.log(clickCount+ " : Count");
     console.log("Speed : "+ clickSpeed);
     console.log(userClickReset + " = reset");
    clickCount >= 50 || userClickReset >= 50 ? shopHolder.classList.remove('hidden') : shopHolder.classList.add('hidden');
    let lastRecordingTime = localStorage.getItem('currentTime');
    let timeDiff = Date.now() - parseInt(lastRecordingTime);
    timeDiff = Math.round(timeDiff / 999);
    let bonusClicks = parseInt(clickSpeed) !== 0 ? (parseInt(clickSpeed) * timeDiff + userClickReset) :  0;
    console.log(bonusClicks+" bonus");
    userClickReset = 0;
    let newCount = ((parseInt(clickCount) + bonusClicks)).toString();

    console.log(recordCount+ " : record made");
    localStorage.setItem('currentTime', Date.now().toString())
    localStorage.setItem('clickSpeed', clickSpeed.toString());
    localStorage.setItem("clickCount", newCount);
    clickCounterAll.textContent = localStorage.getItem("clickCount");
    clickCounterSpan.textContent = userClickCount.toString();
}

