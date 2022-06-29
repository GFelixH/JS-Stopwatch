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
  let seg = calc(segI, segF);
  let min = calc(minI, minF);
  setTimer(min, seg);
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
