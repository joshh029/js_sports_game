let reset = document.getElementById ("reset")
let numresets = document.getElementById ("num-resets")
let teamonenumshots = document.getElementById ("teamone-numshots")
let teamonenumhits = document.getElementById ("teamone-numhits")
let teamoneshoot = document.getElementById ("teamone-shoot")

let count = 0;
let goalCount = 0;

teamoneshoot.addEventListener("click", function(){
    count = count + 1;
    teamonenumshots.innerHTML = count;
    let randomNum = Math.random()
    if (randomNum > 0.5){
        goalCount = goalCount + 1;
        teamonenumhits.innerHTML = goalCount;
    }
})