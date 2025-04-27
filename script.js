//Clock setting (hours, minutes and seconds)
function updateClock() {
    const hoursElement = document.querySelector("#hours")
    const minutesElement = document.querySelector("#minutes")
    const secondsElement = document.querySelector("#seconds")

    const date = new Date()

    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    hoursElement.textContent = hours
    minutesElement.textContent = minutes
    secondsElement.textContent = seconds

    if (hours < 12) {
        document.body.style.backgroundImage = "url('assets/imgmanha.jpg')"
        document.querySelector("#imagem-relogio").src = "assets/manha.png"
    } else if (hours <= 18) {
        document.body.style.backgroundImage = "url('assets/imgtarde.jpg')"
        document.querySelector("#imagem-relogio").src = "assets/tarde.png"
    } else {
        document.body.style.backgroundImage = "url('assets/imgnoite.jpg')"
        document.querySelector("#imagem-relogio").src = "assets/noite.png"
    }

}
setInterval(updateClock, 1000)// Call the function every second




//day of the week
const date = new Date()
const diaSemana = date.getDay()
const day = document.querySelector(".dia-semana")


switch (diaSemana) {
    case 0:
        day.innerHTML = "Domingo"
        break
    case 1:
        day.innerHTML = "Segunda-feira"
        break
    case 2:
        day.innerHTML = "Terça-feira"
        break
    case 3:
        day.innerHTML = "Quarta-feira"
        break
    case 4:
        day.innerHTML = "Quinta-feira"
        break
    case 5:
        day.innerHTML = "Sexta-feira"
        break
    case 6:
        day.innerHTML = "Sábado"
        break
    default:
        day.innerHTML = "Dia inválido"
        break
}