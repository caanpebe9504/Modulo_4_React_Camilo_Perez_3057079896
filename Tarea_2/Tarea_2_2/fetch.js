
let container = document.getElementById("container")

let button = document.getElementById("button")

button.addEventListener("click",showData,true)

button.addEventListener("click",randomColor)


async function showData(){

    const url = 'https://randomuser.me/api/'

    const rawData = await fetch(url)
    const userData = await rawData.json()

    container.innerHTML = `
       <img src = '${userData.results[0].picture.large}'>
       <p> Celular: ${userData.results[0].cell} </p>
       <p> Email: ${userData.results[0].email} </p>
       <p> Género: ${userData.results[0].gender === "male" ?
        "Masculino" : "Femenino"
       } </p>
       <p> Nombre: ${userData.results[0].name.first} ${userData.results[0].name.last}</p>

    `
}

function customizedColor(){

    const assignedLetters = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
    
    let initial = "#"

    for (let i = 0; i < 6; i++){
        initial += assignedLetters[Math.floor(Math.random() * 16)]
        
    }
    return initial
}


function randomColor(){

    container.style.backgroundColor = customizedColor()
}

