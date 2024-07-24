
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
        if (sec < 0){
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
        if(sec < 0){
            clearInterval(timer)
            nbCycles.innerHTML ++
            if(nbCycles.innerHTML <= cyVal){
                exCount()
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
        exCount() 
    }
    else{
        console.log("il faut au minimum 1 pour chaque entrée")
    }
})

            

            
               
            



        
