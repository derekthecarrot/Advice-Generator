const Dice = document.getElementById('dice')


function generateAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then( response => {
        return response.json();
        }).then( data => {
        console.log(data)

        document.getElementById('advicenum').innerHTML = 'Advice #' + data.slip.id
        document.getElementById('advicetext').innerHTML = data.slip.advice
    })
}

Dice.addEventListener("click", generateAdvice)
