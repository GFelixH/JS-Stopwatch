//botoes
let comeca = document.querySelector("#comeca");
let para = document.querySelector("#para");
let zera = document.querySelector("#zera");
//span tempo
let minutos = document.querySelector("#minutos");
let segundos = document.querySelector("#segundos");
// zera.addEventListener("click");
let inicio;
let final;
comeca.addEventListener("click", () => {
  //captura tempo inicial
  inicio = new Date();
  console.log(inicio);
});
para.addEventListener("click", () => {
  // captura tempo final
  final = new Date();
  console.log(final);

  let minF = final.getMinutes();
  let minI = inicio.getMinutes();
  let segF = final.getSeconds();
  let segI = inicio.getSeconds();
  let seg = calcDelta(segI, segF);
  let min = calcDelta(minI, minF);
  console.log(seg);
  console.log(min);
  setTimer(min, seg);
});
function calcDelta(i, o) {
  // Calcula tempo passado
  let tempo;
  if (i <= o) tempo = o - i;
  else tempo = 60 + i - o;
  if (tempo > 60) tempo -= 60;
  return tempo;
}
function setTimer(m, s) {
  m = poeZero(m);
  s = poeZero(s);
  minutos.textContent = m;
  segundos.textContent = s;
}
function poeZero(x) {
  if (x < 10) return "0" + x;
  return x;
}
