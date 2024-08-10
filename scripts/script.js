//déclenchement du service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('Chronosport/service-worker.js').then((registration) => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, (error) => {
            console.log('ServiceWorker registration failed: ', error);
        });
    });
}
//script principal
//définit les champs d'entrée
let actionInput = document.getElementById("exercice")
let chillInput  = document.getElementById("repos")
let cycleInput = document.getElementById("cycles")
let button = document.getElementById("startBtn")
let timeOutBeep = new Audio("sounds/timeOutBeep.mp3")
//déclenchement du bouton start
button.addEventListener("click", () =>{
    let exVal = Number(exercice.value)
    let reVal = Number(repos.value)
    let cyVal = Number(cycles.value)
    let currentCycle = 0
    if((exVal >= 1) && (reVal >= 1) && (cyVal >=1)){
        button.disabled = true
        button.classList.add("hide")
        let section = document.querySelector("section")
        section.innerHTML =
        `<div class="blue">
            <label for="exercice">ACTION !</label>
            <p id="exTime">${exVal}</p>
            <span>s</span>
        </div>
        <div class="yellow">
            <label for="repos">Chill...</label>
            <p id="reTime">${reVal}</p>
            <span>s</span>
        </div>
        <div>
            <img class="move" src="images/cycle.png">
            <p id="nbCycles" class="cycle">${currentCycle} / ${cyVal}</p>
        </div>`
        let exTime = document.getElementById("exTime")
        let reTime = document.getElementById("reTime")
        let exerciceBeep = new Audio("sounds/exerciceBeep.mp3")
        exerciceBeep.play()
        exCount(exVal, reVal, cyVal, currentCycle) 
    }
    else{
        console.log("il faut au minimum 1 pour chaque entrée")
    }
})