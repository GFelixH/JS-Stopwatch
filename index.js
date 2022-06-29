// botoes
let comeca = document.querySelector("#comeca");
let para = document.querySelector("#para");
let zera = document.querySelector("#zera");
// span tempo
let minutos = document.querySelector("#minutos");
let segundos = document.querySelector("#segundos");
let dezMiliSec = document.querySelector("#milisec");

let controlador = false;
comeca.addEventListener("click", () => {
  controlador = true;
});
para.addEventListener("click", () => {
  controlador = false;
});
let intervalId = setInterval(() => {
  if (controlador) {
    dezMiliSec.textContent = formata(parseInt(dezMiliSec.textContent) + 1);
    if (dezMiliSec.textContent == 100) {
      dezMiliSec.textContent = 0;
      segundos.textContent = formata(parseInt(segundos.textContent) + 1);
      if (segundos.textContent == 60) {
        segundos.textContent = 0;
        minutos.textContent = formata(parseInt(minutos.textContent) + 1);
      }
    }
  }
}, 10);
function formata(t) {
  if (t < 10) return "0" + t;
  return t;
}
zera.addEventListener("click", () => {
  dezMiliSec.textContent = "00";
  segundos.textContent = "00";
  minutos.textContent = "00";
});
