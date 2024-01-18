const output = document.getElementById("output")

const lesson = new Date(2024, 1, 19, 9, 30, 0, 0);
console.log(lesson)

const clock = setInterval(countdown, 1000)

function countdown(){

    let currentTime = new Date()
    if(currentTime==lesson)
    {
        output.innerHTML = "Lezione iniziata!"
        clearInterval(clock)
    } else {
        output.innerHTML = currentTime.toLocaleTimeString()
    }

}