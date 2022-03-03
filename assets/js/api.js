const Dice = document.getElementById('dice')


function callApi() {
    fetch('https://api.adviceslip.com/advice')
        .then( response => {
        return response.json();
        }).then( json => {
        console.log(json)
    })
}

Dice.addEventListener("click", callApi)