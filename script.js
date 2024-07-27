
let exercice = document.getElementById("exercice")
let repos = document.getElementById("repos")
let cycles = document.getElementById("cycles")
let button = document.getElementById("startBtn")
let exTime = document.getElementById("extime")
let reTime = document.getElementById("retime")
let nbCycles = document.querySelector("p span")
function exCount(){
    let exVal = Number(exercice.value)
    let sec = exVal
    console.log(exVal)
    let timer = setInterval(function(){
        exTime.innerHTML = sec
        sec --
        if(sec < 7  && sec > -1){
            let timeOutBeep = new Audio("sounds/timeOutBeep.mp3")
            timeOutBeep.play()
        }
        if (sec < 0){
            let reposBeep = new Audio("sounds/reposBeep.mp3")
            reposBeep.play()
            clearInterval(timer)
            reCount()
        }    
    }, 1000)
}
function reCount(){
    let reVal = Number(repos.value)
    let cyVal = Number(cycles.value)
    let sec = reVal
    console.log(reVal)
    let timer = setInterval(function(){
        reTime.innerHTML = sec
        sec --
        if(sec < 7  && sec > -1){
            let timeOutBeep = new Audio("sounds/timeOutBeep.mp3")
            timeOutBeep.play()
        }
        if(sec < 0){
            clearInterval(timer)
            nbCycles.innerHTML ++
            if(nbCycles.innerHTML <= cyVal){
                let exerciceBeep = new Audio("sounds/exerciceBeep.mp3")
                exerciceBeep.play()
                exCount()
            }
            else{
                nbCycles.innerHTML = 0
                let finishBeep = new Audio("sounds/finishBeep.mp3")
                finishBeep.play()
            } 
        }
    }, 1000)
}
button.addEventListener("click", () =>{
    let exVal = Number(exercice.value)
    let reVal = Number(repos.value)
    let cyVal = Number(cycles.value)
    nbCycles.innerHTML = 1
    if((exVal >= 1) && (reVal >= 1) && (cyVal >=1)){
        let exerciceBeep = new Audio("sounds/exerciceBeep.mp3")
        exerciceBeep.play()
        exCount() 
    }
    else{
        console.log("il faut au minimum 1 pour chaque entrée")
    }
})

            

            
               
            



        
