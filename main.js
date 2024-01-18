const output = document.getElementById("output")

const lesson = new Date(2024, 0, 19, 9, 30, 0, 0);

const clock = setInterval(countdown, 1000)

function countdown(){

    let currentTime = new Date()
    let remainingTime = Math.abs(lesson - currentTime)
    if(lesson<currentTime)
    {
        output.innerHTML = "Lezione iniziata!"
        clearInterval(clock)

    } else {
        // divido per 60 (minuti) * 1000ms
        const ore = Math.floor(remainingTime / 3600000)
        // divido per 60(minuti) * 1000 ms il resto delle ore
        const minuti = Math.floor((remainingTime % 3600000) / 60000)
        // divido per 1000ms il resto dei minuti
        const secondi = Math.floor((remainingTime % 60000) / 1000)

        output.innerHTML = `Mancano ${ore} ore, ${minuti} minuti, ${secondi} secondi alla lezione`
    }

}