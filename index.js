//botoes
let comeca = document.querySelector("#comeca");
let para = document.querySelector("#para");
let zera = document.querySelector("#zera");
//span tempo
let minutos = document.querySelector("#minutos");
let segundos = document.querySelector("#segundos");

let inicio;
let final;
let controlador = false;

comeca.addEventListener("click", () => {
  inicio = new Date();
  controlador = true;
});
para.addEventListener("click", () => {
  final = new Date();
  if (controlador) {
    let minF = final.getMinutes();
    let minI = inicio.getMinutes();
    let segF = final.getSeconds();
    let segI = inicio.getSeconds();
    let seg = calc(segI, segF);
    let min = calc(minI, minF);
    setTimer(min, seg);
    controlador = false;
  }
});
function calc(i, o) {
  let tempo;
  if (i <= o) tempo = o - i;
  else tempo = 60 + i - o;
  if (tempo > 60) tempo -= 60;
  return tempo;
}
function setTimer(m, s) {
  let minAtual = minutos.textContent;
  minAtual = parseInt(minAtual) + m;
  let segAtual = segundos.textContent;
  segAtual = parseInt(segAtual) + s;
  segundos.textContent = formataTempo(segAtual);
  minutos.textContent = formataTempo(minAtual);
}
function formataTempo(x) {
  if (x > 60) x -= 60;
  if (x < 10) return "0" + x;
  return x;
}
zera.addEventListener("click", () => {
  segundos.textContent = "00";
  minutos.textContent = "00";
});
