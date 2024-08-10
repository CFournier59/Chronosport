//page des fonctions

//fontion du compte à rebours ACTION
function exCount(exVal, reVal, cyVal, currentCycle){
    let background = document.getElementById("gradientMain")
    background.style.opacity = 0
    let sec = exVal
    console.log(exVal)
    let timer = setInterval(function(){
        exTime.innerHTML = sec
        sec --
        if(sec < 7  && sec > -1){
            
            timeOutBeep.play()
        }
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
    let background = document.getElementById("gradientAction")
    background.style.opacity = 0
    let sec = reVal
    let timer = setInterval(function(){
        reTime.innerHTML = sec
        sec --
        if(sec < 7  && sec > -1){
            
            timeOutBeep.play()
        }
        if(sec < 0){
            clearInterval(timer)
            currentCycle ++
            let nbCycles = document.getElementById("nbCycles")
            nbCycles.innerHTML = currentCycle + " / " + cyVal
            if(currentCycle < cyVal){
                let exerciceBeep = new Audio("sounds/exerciceBeep.mp3")
                exerciceBeep.play()
                background.style.opacity = 1
                exCount(exVal, reVal, cyVal, currentCycle)
            }
            else{
                let finishBeep = new Audio("sounds/finishBeep.mp3")
                finishBeep.play()
                background = document.getElementById("gradientMain")
                background.style.opacity = 1
            } 
        }
    }, 1000)
}