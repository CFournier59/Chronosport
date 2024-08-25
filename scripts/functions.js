//page des fonctions

//fontion du compte à rebours ACTION
function exCount(exVal, reVal, cyVal, currentCycle){
    // changement du gradient de fond
    let background = document.getElementById("gradientMain")
    background.style.opacity = 0
    // déclenchement du cpte à rebours pour la séquence action
    let sec = exVal
    console.log(exVal)
    let timer = setInterval(function(){
        exTime.innerHTML = sec
        sec --
        // "bip" des dernières secondes
        if(sec < 7  && sec > -1){
            let timeOutBeep = new Audio("sounds/timeOutBeep.mp3")
            timeOutBeep.play()
        }
        // fin et passage sur la séquence chill
        if (sec < 0){
            let reposBeep = new Audio("sounds/reposBeep.mp3")
            reposBeep.play()
            clearInterval(timer)
            reCount(reVal, cyVal, currentCycle, exVal)
        }    
    }, 1000)
}

//fonction du compte à rebours chill
function reCount(reVal, cyVal, currentCycle, exVal){
    // changement du gradient de fond
    let background = document.getElementById("gradientAction")
    background.style.opacity = 0
    // déclenchement du cpte à rebours pour la séquence chill
    let sec = reVal
    let timer = setInterval(function(){
        reTime.innerHTML = sec
        sec --
         // "bip" des dernières secondes
        if(sec < 7  && sec > -1){
            let timeOutBeep = new Audio("sounds/timeOutBeep.mp3")
            timeOutBeep.play()
        }
        // fin du cpte et validation d'un cycle
        if(sec < 0){
            clearInterval(timer)
            currentCycle ++
            let nbCycles = document.getElementById("nbCycles")
            nbCycles.innerHTML = currentCycle + " / " + cyVal
            // s'il manque des cycles on recommence
            if(currentCycle < cyVal){
                let exerciceBeep = new Audio("sounds/exerciceBeep.mp3")
                exerciceBeep.play()
                background.style.opacity = 1
                exCount(exVal, reVal, cyVal, currentCycle)
            }
            // sinon fin des 2 cpte à rebours
            else{
                let finishBeep = new Audio("sounds/finishBeep.mp3")
                finishBeep.play()
                background = document.getElementById("gradientMain")
                background.style.opacity = 1
            } 
        }
    }, 1000)
}