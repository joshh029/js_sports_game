let reset = document.getElementById ("reset")
let numresets = document.getElementById ("num-resets")
let teamonenumshots = document.getElementById ("teamone-numshots")
let teamonenumhits = document.getElementById ("teamone-numhits")
let teamoneshoot = document.getElementById ("teamone-shoot")

let teamtwonumshots = document.getElementById ("teamtwo-numshots")
let teamtwonumhits = document.getElementById ("teamtwo-numhits")
let teamtwoshoot = document.getElementById ("teamtwo-shoot")

let count = 0;
let goalCount = 0;

teamoneshoot.addEventListener("click", function(){
    count = count + 1;
    teamonenumshots.innerHTML = count;
    let randomNum = Math.random()
    if (randomNum > 0.8){
        goalCount = goalCount + 1;
        teamonenumhits.innerHTML = goalCount;
    }
    })

let countTwo = 0;
let goalCountTwo = 0;

teamtwoshoot.addEventListener("click", function(){
    countTwo = countTwo + 1;
    teamtwonumshots.innerHTML = countTwo;
    let randomNum = Math.random()
    if (randomNum > 0.8){
        goalCountTwo = goalCountTwo + 1;
        teamtwonumhits.innerHTML = goalCountTwo;
    }
    })

let resetCount = 0

reset.addEventListener("click", function(){
    resetCount = resetCount +1;
    numresets.innerHTML = resetCount;
    goalCount = 0;
    goalCountTwo = 0;
    count = 0
    countTwo = 0
    teamonenumhits.innerHTML = 0
    teamtwonumhits.innerHTML = 0
    teamonenumshots.innerHTML = 0
    teamtwonumshots.innerHTML = 0

})