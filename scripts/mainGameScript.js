const mainGameButton = document.getElementById('mainGameButton'),
      clickCounterSpan = document.getElementById('clickCounterSpan'),
      clickCounterAll = document.getElementById('clickCounterAll'),
      clickCounterSpeed = document.getElementById('clickCounterSpeed'),
      starterHints = document.getElementById("starterHints");

let userClickCount = 0,
    userClickReset = 0,
    recordCount =  0,
    clickCount = 0,
    clickSpeed = 0,
    firstLoad = true;

if (firstLoad === true) {
    firstLoad = false;
    recordGame();
}

// Si jeu est sur un nouvelle ordi/navigator, création de Storage
if (localStorage.getItem("clickCount") === null
    && localStorage.getItem("clickSpeed") === null
    && localStorage.getItem('currentTime') === null)
    {
    localStorage.setItem("clickCount", "0");
    localStorage.setItem("clickSpeed", "0");
    localStorage.setItem("currentTime", Date.now().toString());
        starterHints.textContent = "You need to click a bit!";
    }else {
    clickCount = localStorage.getItem("clickCount");
    clickSpeed = localStorage.getItem("clickSpeed");
    clickCounterAll.textContent = localStorage.getItem("clickCount");
    clickCounterSpeed.textContent = localStorage.getItem("clickSpeed");
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
    let clickSpeed = localStorage.getItem("clickSpeed");
    let clickCount = localStorage.getItem("clickCount");
    let lastRecordingTime = localStorage.getItem('currentTime');
    let timeDiff = Date.now() - parseInt(lastRecordingTime);
    timeDiff = Math.round(timeDiff / 999);
    let bonusClicks = (clickSpeed * timeDiff + userClickReset).toString();
    userClickReset = 0;
    let newCount = ((parseInt(clickCount) + parseInt(bonusClicks))).toString();

    console.log(recordCount+ " : record made");
    localStorage.setItem('currentTime', Date.now().toString())
    localStorage.setItem('clickSpeed', clickSpeed.toString());
    localStorage.setItem("clickCount", newCount.toString());
    clickCounterAll.textContent = localStorage.getItem("clickCount");
    clickCounterSpan.textContent = userClickCount.toString();
}

