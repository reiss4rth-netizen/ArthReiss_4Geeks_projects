const body = document.getElementById("body");
const pageOneBtns = document.getElementById("pageOneBtns");
const btnOtherCard = document.getElementById("otherCard");
const btnIntervals = document.getElementById("intervalTime");
const btnChangeSize = document.getElementById("changeSize");
const btnAsk4ACard = document.getElementById("ask4Card");
const ask4aCardPage = document.getElementById("ask4aCardPage");
const intervalsPage = document.getElementById("intervalsPage");

// Generacion de carta
const naipe = document.getElementById("naipe");
const alert = document.getElementById("alert");
const symb = document.querySelectorAll(".symbol");
const number = document.getElementById("number");
const cardFooter = document.getElementById("cardFooter");
const symbs = [
    `<p class="text-danger">♥</p>`,
    `<p class="text-danger">♦</p>`,
    `<p>♠</p>`,
    `<p>♣</p>`
]
const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
// Funciones necesarias:

// Randomizar valor y simbolo 
function randomizar() {
    const cardNumber = Math.floor(Math.random() * numbers.length);
    const cardSymbol = Math.floor(Math.random() * symbs.length);
    return { num: cardNumber, sym: cardSymbol }
}

// Generar carta en funcion de los datos otorgados
function newCard(num, sym) {
    number.innerHTML = numbers[num];
    symb.forEach(function (corner) {
        corner.innerHTML = symbs[sym];
    })
    sym >= 2 ? number.classList.remove("text-danger") : number.classList.add("text-danger");
    cardFooter.classList.add("cardFooterSymb", "justify-content-end");
}

// carta aleatoria
function randomCard() {
    const dataCard = randomizar();
    newCard(dataCard.num, dataCard.sym);
}

btnOtherCard.addEventListener("click", randomCard)

btnIntervals.addEventListener("click", () => {
    pageOneBtns.classList.add("d-none");
    intervalsPage.classList.remove("d-none");
})

// Generar cartas en intervalos de tiempo 
const btnStop = document.getElementById("stopTime");
const timeSelected = document.getElementById("timeSelected");
const goTime = document.getElementById("goTime");
const btnBackFromIntervals = document.getElementById("back");

// Definimos el tiempo
let tickTack
function setTime() {
    if (timeSelected.value === "0") {
        alert.classList.remove("d-none");
        return
    };
    tickTack = setInterval(randomCard, Number(timeSelected.value))
}

// botones, el resto de las funciones que se necesitan ya estn hechas arriba
goTime.addEventListener("click", () => {
    setTime();
    btnStop.disabled = false;
    btnStop.classList.replace("btn-secondary", "btn-danger");
    timeSelected.disabled = true
});
btnStop.addEventListener("click", () => {
    clearInterval(tickTack);
    timeSelected.disabled = false;
    alert.classList.add("d-none")
    btnStop.disabled = true;
    btnStop.classList.replace("btn-danger", "btn-secondary");
})
btnBackFromIntervals.addEventListener("click", () => {
    clearInterval(tickTack);
    timeSelected.disabled = false;
    alert.classList.add("d-none");
    btnStop.disabled = true;
    btnStop.classList.replace("btn-danger", "btn-secondary");
    pageOneBtns.classList.remove("d-none");
    intervalsPage.classList.add("d-none");
})

// Pedir carta 
const valor = document.getElementById("valor");
const family = document.getElementById("familia");
const btnCardDropper = document.getElementById("btnDropCard");
const btnBackFromAskCard = document.getElementById("backFromAsk4Card")

btnAsk4ACard.addEventListener("click", () => {
    pageOneBtns.classList.add("d-none");
    ask4aCardPage.classList.remove("d-none");
})

// se usa la misma funcion solo que ahora los parametros los otorga el usuario 
// en el select del html 
btnCardDropper.addEventListener("click", () => {

    if ((valor.value === "0" && family.value === "0") || (valor.value === "0" || family.value === "0")) {
        alert.classList.remove("d-none");
    } else {
      alert.classList.add("d-none");
      newCard(valor.value-1, family.value-1);
    }
})

btnBackFromAskCard.addEventListener("click", () => {
    pageOneBtns.classList.remove("d-none");
    alert.classList.add("d-none");
    naipe.classList.remove("d-none");
    family.value = "0";
    valor.value = "0";
    ask4aCardPage.classList.add("d-none");
})

// para cambiar el tamaño (pensé que seria lo mas dificil xd todo lo contrario)
const changeSizePage = document.getElementById("changeSizePage");
const sizeRange = document.getElementById("sizeRange");
const btnBackFromResizer = document.getElementById("backFromResizer");

sizeRange.addEventListener("input", (e) => {
    naipe.style.transform = `scale(${e.target.value})`
})

btnChangeSize.addEventListener("click", () => {
    pageOneBtns.classList.add("d-none");
    changeSizePage.classList.remove("d-none");
    body.classList.add("justify-content-center");
})

btnBackFromResizer.addEventListener("click", () => {
    pageOneBtns.classList.remove("d-none");
    changeSizePage.classList.add("d-none");
    body.classList.remove("justify-content-center");
})
