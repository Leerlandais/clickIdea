const mainGameButton = document.getElementById('mainGameButton'),
      clickCounterSpan = document.getElementById('clickCounterSpan');
const starterHints = document.getElementById("starterHints");
/*
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
*/
/*
let clickCountTest = 10;
let clickSpeedTest = 3;
let currentTimeTest = Date.now()

localStorage.setItem('clickCountTest', clickCountTest.toString());
localStorage.setItem('currentTimeTest', currentTimeTest.toString());
localStorage.setItem('clickSpeedTest', clickSpeedTest.toString());

 */


let gameLaunchTime = Date.now();
let lastGameTime = localStorage.getItem('currentTimeTest');
let timeDiff = gameLaunchTime - lastGameTime;
let speedTest = localStorage.getItem('clickSpeedTest');
timeDiff = Math.round(timeDiff / 60000);
console.log(timeDiff+" : timeDiff");
let bonusClicks = speedTest * timeDiff;
console.log("bonus "+ bonusClicks);
let countTest = localStorage.getItem('clickCountTest');
let newCount = (parseInt(countTest) + parseInt(bonusClicks));
console.log("newCount: "+ newCount);
// alert("You previously had " + countTest + " clicks. You now have " + newCount + " clicks");