const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;
const options = ["piedra", "papel", "tijera"];

const TIE = 0;
const WIN = 1;
const LOSE = 2;

let ronda = 0;
let puntajePJ = 0;
let puntajePC = 0;


const game = (userOption) => {
  ronda++
  
  const pcOption = Math.floor(Math.random() * 3);
  const result = calcResult(userOption, pcOption);
  
  switch (result) {
    case TIE:
      alert("RONDA: " + ronda + " la pc jugo: " + options[pcOption] + ',' + " asi que empataste wachin");
      break;
    case WIN:
      alert("RONDA: " + ronda + " la pc jugo: " + options[pcOption] + ',' + " asi que ganaste wachin");
      puntajePJ++
      break;
    case LOSE:
      alert("RONDA: " + ronda + " la pc jugo: " + options[pcOption] + ',' + " asi que perdiste wachin");
      puntajePC++
      break;
  }

  if (ronda === 5 ) {
    alert("RESULTADO -- pc: " + puntajePC +  "vos: " + puntajePJ)
    ronda = 0
    puntajePC = 0
    puntajePJ = 0
  }

};


const calcResult = (userOption, pcOption) => {
  if (userOption === pcOption) return TIE;

  if (userOption === ROCK) {
    if (pcOption === PAPER) return LOSE;
    return WIN;
  }

  if (userOption === SCISSORS) {
    if (pcOption === ROCK) return LOSE;
    return WIN;
  }

  if (userOption === PAPER) {
    if (pcOption === SCISSORS) return LOSE;
    return WIN;
  }
};