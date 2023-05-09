let resetBtn = document.getElementById("reset_btn")
let saveEl = document.getElementById("save_el")
let counterNumeric = document.getElementById("counter_numeric")
let count = 0

function incremetare_functie() {
  count += 1 // shorthand pentru incrementare ( old one count = count + 1)
  counterNumeric.textContent = count
}

function save() {
  let salvare = count + " - "
  saveEl.textContent += salvare // textContent in loc de InnerText, in cazul asta pentru ca ne avea spatiu dupa -
  counterNumeric.textContent = 0 // cand apasam save, counterul se reseteaza la 0
  count = 0 // fara etapa asta, incrementarea continua si se relua de la ultumul numar salvat, asa se reseteaza si ea la 0 
}

function reset() {
  saveEl.textContent = "Previous saves:"
}
