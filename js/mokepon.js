const selecionAtaque = document.getElementById("ataque");
const sectionReset = document.getElementById("reinicio");
const btnMascotaJugador = document.getElementById("btn-mascota");
const btnReset = document.getElementById("btn-reset");

const selecionMascota = document.getElementById("mascota");
const spanMascotaAliada = document.getElementById("mascota-aliada");

const spanMascotaEnemigo = document.getElementById("mascota-enemiga");

const spanVidaAliado = document.getElementById("vida-jugador");
const spanVidaEnemigo = document.getElementById("vida-enemigo");

const sectionM = document.getElementById("resultadof");
const ataquesDelJugador = document.getElementById("ataquesDelJugador");
const ataquesDelEnemigo = document.getElementById("ataquesDelEnemigo");
const cardsContainer = document.getElementById("cardsContainer");
const contenedorAtaques = document.getElementById("contenedorAtaques");

let mokepones = [];
let ataqueJugador;
let ataqueEnemigo = [];
let opcionesMokepones;
let inputHipoge;
let inputRatigueya;
let inputCapipepo;
let inputTommy;
let inputRiley;
let inputMax;
let resultado;
let mascotaJugador;
let ataquesMokepon;
let ataqueMopekonEnemigo;
let btnFuego;
let btnAgua;
let btnTierra;
let botones = [];
let indexAtaqueEnemigo = [];
let indexAtaqueJugador = [];
let eventoJugador = [];
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let vidaJugador = 3;
let vidaEnemigo = 3;

class Mokepon {
  constructor(nombre, foto, vida) {
    this.nombre = nombre;
    this.foto = foto;
    this.vida = vida;
    this.ataques = [];
  }
}

let hipoge = new Mokepon(
  "Hipoge",
  "https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-39-editando-js/programar/mokepon/assets/mokepons_mokepon_ratigueya_attack.png",
  5
);

let capipepo = new Mokepon(
  "Capipepo",
  "https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-39-editando-js/programar/mokepon/assets/mokepons_mokepon_hipodoge_attack.png",
  5
);

let ratigueya = new Mokepon(
  "Ratigueya",
  "https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-39-editando-js/programar/mokepon/assets/mokepons_mokepon_capipepo_attack.png",
  5
);
let tommy = new Mokepon(
  "Tommy",
  "https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-59-detalles-finales-again/programar/mokepon/assets/mokepons_mokepon_langostelvis_attack.png",
  8
);

let max = new Mokepon(
  "Max",
  "https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-59-detalles-finales-again/programar/mokepon/assets/mokepons_mokepon_pydos_attack.png",
  5
);

let riley = new Mokepon(
  "Riley",
  "https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-59-detalles-finales-again/programar/mokepon/assets/mokepons_mokepon_tucapalma_attack.png",
  5
);
hipoge.ataques.push(
  { nombre: "💧", id: "btn-agua" },
  { nombre: "💧", id: "btn-agua" },
  { nombre: "💧", id: "btn-agua" },
  { nombre: "🔥", id: "btn-fuego" },
  { nombre: "🌴", id: "btn-tierra" }
);

capipepo.ataques.push(
  { nombre: "🌴", id: "btn-tierra" },
  { nombre: "🌴", id: "btn-tierra" },
  { nombre: "🌴", id: "btn-tierra" },
  { nombre: "💧", id: "btn-agua" },
  { nombre: "🔥", id: "btn-fuego" }
);

ratigueya.ataques.push(
  { nombre: "🔥", id: "btn-fuego" },
  { nombre: "🔥", id: "btn-fuego" },
  { nombre: "🔥", id: "btn-fuego" },
  { nombre: "💧", id: "btn-agua" },
  { nombre: "🌴", id: "btn-tierra" }
);

max.ataques.push(
  { nombre: "🌴", id: "btn-tierra" },
  { nombre: "🔥", id: "btn-fuego" },
  { nombre: "💧", id: "btn-agua" },
  { nombre: "💧", id: "btn-agua" },
  { nombre: "🌴", id: "btn-tierra" }
);

riley.ataques.push(
  { nombre: "🔥", id: "btn-fuego" },
  { nombre: "🔥", id: "btn-fuego" },
  { nombre: "🔥", id: "btn-fuego" },
  { nombre: "💧", id: "btn-agua" },
  { nombre: "💧", id: "btn-agua" }
);

tommy.ataques.push(
  { nombre: "🔥", id: "btn-fuego" },
  { nombre: "🌴", id: "btn-tierra" },
  { nombre: "🌴", id: "btn-tierra" },
  { nombre: "💧", id: "btn-agua" },
  { nombre: "🌴", id: "btn-tierra" }
);

mokepones.push(hipoge, capipepo, ratigueya, tommy, max, riley);

function elegirMarcotaJugador() {
  selecionMascota.style.display = "none";
  selecionAtaque.style.display = "flex";

  if (inputHipoge.checked) {
    spanMascotaAliada.innerHTML = inputHipoge.id;
    mascotaJugador = inputHipoge.id;
    alert("Seleccionaste Hipoge");
  } else if (inputCapipepo.checked) {
    spanMascotaAliada.innerHTML = inputCapipepo.id;
    mascotaJugador = inputCapipepo.id;
    alert("Seleccionaste Capipepo");
  } else if (inputRatigueya.checked) {
    spanMascotaAliada.innerHTML = inputRatigueya.id;
    mascotaJugador = inputRatigueya.id;
    alert("Seleccionaste Ratigueya");
  } else if (inputTommy.checked) {
    spanMascotaAliada.innerHTML = "Tommy";
    mascotaJugador = inputRatigueya.id;
    ("Seleccionaste Tommy");
  } else if (inputMax.checked) {
    spanMascotaAliada.innerHTML = "Max";
    mascotaJugador = inputRatigueya.id;
    alert("Seleccionaste Max");
    } else if (inputRiley.checked) {
    spanMascotaAliada.innerHTML = "Riley";
    mascotaJugador = inputRatigueya.id;
      alert("Seleccionaste Riley");
  } else {
    alert("Debes elergir una mascota");
    resetJuego()
  }
  extraerAtaques(mascotaJugador);
  eleccionMascotaEnemigo(); 
}

function extraerAtaques(mascotaJugador) {
  let ataques;
  for (let i = 0; i < mokepones.length; i++) {
    if (mascotaJugador === mokepones[i].nombre) {
      ataques = mokepones[i].ataques;
    }
  }
  console.log(ataques);
  mostrarAtaques(ataques);
}

function mostrarAtaques(ataques) {
  ataques.forEach((ataque) => {
    ataquesMokepon = `
    <button id=${ataque.id} class="btnAtaque btnAtaque">${ataque.nombre}</button>`;
    contenedorAtaques.innerHTML += ataquesMokepon;
  });
  btnFuego = document.getElementById("btn-fuego");
  btnAgua = document.getElementById("btn-agua");
  btnTierra = document.getElementById("btn-tierra");
  botones = document.querySelectorAll(".btnAtaque");
}

function secuenciaAtaque() {
  botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      if (e.target.textContent === "🔥") {
        eventoJugador.push("FUEGO");
        console.log(eventoJugador);
        boton.style.background = "#112f58";
        boton.disabled = true;
      } else if (e.target.textContent === "💧") {
        eventoJugador.push("AGUA");
        console.log(eventoJugador);
        boton.style.background = "#112f58";
        boton.disabled = true;
      } else {
        eventoJugador.push("TIERRA");
        console.log(eventoJugador);
        boton.style.background = "#112f58";
        boton.disabled = true;
      }
      ataqueAleatorioEnemigo();
    });
  });
}

function iniciarJuego() {
  mokepones.forEach((mokepon) => {
    opcionesMokepones = `
    <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label for=${mokepon.nombre} class="card-mokepon">
          <p>${mokepon.nombre}</p>
          <img
            src=${mokepon.foto}
            alt=${mokepon.nombre}
          />
        </label>`;
    cardsContainer.innerHTML += opcionesMokepones;

    inputHipoge = document.getElementById("Hipoge");
    inputRatigueya = document.getElementById("Ratigueya");
    inputCapipepo = document.getElementById("Capipepo");
    inputMax = document.getElementById("Max");
    inputRiley = document.getElementById("Riley");
    inputTommy = document.getElementById("Tommy");
  });

  selecionAtaque.style.display = "none";
  sectionReset.style.display = "none";

  btnMascotaJugador.addEventListener("click", elegirMarcotaJugador);


  btnReset.addEventListener("click", resetJuego);
}

// function ataqueFuego() {
//   ataqueJugador = "FUEGO";
//   ataqueAleatorioEnemigo();
// }

// function ataqueAgua() {
//   ataqueJugador = "Agua";
//   ataqueAleatorioEnemigo();
// }

// function ataqueTierra() {
//   ataqueJugador = "Tierra";
//   ataqueAleatorioEnemigo();
// }

function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(0, ataqueMopekonEnemigo.length - 1);
  //hacerlo con array
  if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
    ataqueEnemigo.push("FUEGO");
  } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
    ataqueEnemigo.push("AGUA");
  } else {
    ataqueEnemigo.push("TIERRA");
  }
  console.log(ataqueEnemigo);
  iniciarPelea();
}

function iniciarPelea() {
  if (eventoJugador.length === 5) {
    combate();
  }
}
//Function crearMensaje(resultado)

function crearMensaje() {
  let nuevoAtaqueJugador = document.createElement("p");
  let nuevoAtaqueEnemigo = document.createElement("p");

  sectionM.innerHTML = resultado;
  nuevoAtaqueJugador.innerHTML = indexAtaqueJugador;
  nuevoAtaqueEnemigo.innerHTML = indexAtaqueEnemigo;
  // let parrafo = document.createElement("p");
  // parrafo.innerHTML =
  //   "Tu mascota ataco con " +
  //   ataqueJugador +
  //   ", la mascota enemiga ataco con " +
  //   ataqueEnemigo +
  //   " -" +
  //   resultado +
  //   "🥳";

  ataquesDelJugador.appendChild(nuevoAtaqueJugador);
  ataquesDelEnemigo.appendChild(nuevoAtaqueEnemigo);
}

function crearMensajeFinal(resultadoFinal) {
  sectionM.innerHTML = resultadoFinal;

  sectionReset.style.display = "block";
}

// function combate() {
//   if (ataqueEnemigo == ataqueJugador) {
//     crearMensaje ("EMPATE");
//   } else if (
//     (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") ||
//     (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") ||
//     (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA")
//   ) {
//     crearMensaje("Ganaste");
//   } else {
//     crearMensaje("Perdiste");
//   }
// }

function indexAmbosOponentes(jugador, enemigo) {
  indexAtaqueJugador = eventoJugador[jugador];
  indexAtaqueEnemigo = ataqueEnemigo[enemigo];
}

function combate() {
  for (let i = 0; i < eventoJugador.length; i++) {
    if (eventoJugador[i] === ataqueEnemigo[i]) {
      resultado = "EMPATE";
      indexAmbosOponentes(i, i);
      crearMensaje();
    } else if (eventoJugador[i] === "FUEGO" && ataqueEnemigo[i] === "TIERRA") {
      resultado = "GANASTE";
      victoriasJugador++;
      indexAmbosOponentes(i, i);
      crearMensaje();
      spanVidaAliado.innerHTML = victoriasJugador;
    } else if (eventoJugador[i] === "AGUA" && ataqueEnemigo[i] === "FUEGO") {
      resultado = "GANASTE";
      victoriasJugador++;
      indexAmbosOponentes(i, i);
      crearMensaje();
      spanVidaAliado.innerHTML = victoriasJugador;
    } else if (eventoJugador[i] === "TIERRA" && ataqueEnemigo[i] === "AGUA") {
      resultado = "GANASTE";
      victoriasJugador++;
      indexAmbosOponentes(i, i);
      crearMensaje();
      spanVidaAliado.innerHTML = victoriasJugador;
    } else {
      resultado = "PERDISTE";
      victoriasEnemigo++;
      indexAmbosOponentes(i, i);
      crearMensaje();
      spanVidaEnemigo.innerHTML = victoriasEnemigo;
    }
  }
  revisarVictorias();
}

// if (ataqueEnemigo == ataqueJugador) {
//   resultado = "EMPATE";
// } else if (
//   (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") ||
//   (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") ||
//   (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA")
// ) {
//   resultado = "Ganaste";
//   vidaEnemigo--;
//   spanVidaEnemigo.innerHTML = vidaEnemigo;
// } else {
//   resultado = "Perdiste";
//   vidaJugador--;
//   spanVidaAliado.innerHTML = vidaJugador;
// }
// crearMensaje();
// revisarVida();

function revisarVictorias() {
  if (victoriasJugador === victoriasEnemigo) {
    crearMensajeFinal("Esto fue un Empate");
  } else if (vidaJugador > victoriasEnemigo) {
    crearMensajeFinal("Felicidades, ganaste");
  } else {
    crearMensajeFinal("Intenta de nuevo, perdiste");
  }
}

function resetJuego() {
  location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function eleccionMascotaEnemigo() {
  let mascotaAleatorio = aleatorio(0, mokepones.length - 1);
  spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].nombre;
  ataqueMopekonEnemigo = mokepones[mascotaAleatorio].ataques;
  secuenciaAtaque();
  //   if (mascotaAleatorio == 1) {
  //     spanMascotaEnemigo.innerHTML = "Hipoge";
  //   } else if (mascotaAleatorio == 2) {
  //     spanMascotaEnemigo.innerHTML = "Capipepo";
  //   } else if (mascotaAleatorio == 3) {
  //     spanMascotaEnemigo.innerHTML = "Ratigueya";
  //   }
}
//agregar 3 personajes

window.addEventListener("load", iniciarJuego);
