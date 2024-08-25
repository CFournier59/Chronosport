//déclenchement du service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/Chronosport/service-worker.js').then((registration) => {
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
//création de l'event au click du bouton start
button.addEventListener("click", () =>{
    // récuperation des données rentrées par le user
    let exVal = Number(exercice.value)
    let reVal = Number(repos.value)
    let cyVal = Number(cycles.value)
    let currentCycle = 0
    // si champs correctement remplis, mise en page du chrono
    if((exVal >= 1) && (reVal >= 1) && (cyVal >=1)){
        // on cache le bouton START
        button.disabled = true
        button.classList.add("hide")
        // on change la mise en forme
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
        // récupère les éléments graphiques de cpte à rebours
        let exTime = document.getElementById("exTime")
        let reTime = document.getElementById("reTime")
        // bip de départ
        let exerciceBeep = new Audio("sounds/exerciceBeep.mp3")
        exerciceBeep.play()
        // envoi des fonctions de cpte à rebours
        exCount(exVal, reVal, cyVal, currentCycle) 
    }
    // si le champs n'est pas rempli correctement, un message d'erreur apparaît sur la console
    else{
        console.log("il faut au minimum 1 pour chaque entrée")
    }
})