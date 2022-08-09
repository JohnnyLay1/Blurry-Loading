const loadText = document.querySelector(".loading-text")
const bg = document.querySelector(".bg")

let load = 0;

// create an interval of a specific time. the 30 below represernt 30 milli seconds
let int = setInterval(blurring, 30)

function blurring() {
    // adding of increments of 1 eg 1 - 2 - 3 - 4
    load++

    // normally it will console.log "load" forever unless we stop it at 100 using below
    if (load > 99) {
        clearInterval(int)
    }

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// using a function to create the scale
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
