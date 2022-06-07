//Initial References
const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");
const pista_input = document.querySelector(".pista_input")

/* Variables */
var palabra;
var letras = "QWERTYUIOPASDFGHJKLÑZXCVBNM";
var colorTecla = "#585858";
var colorMargen = "red";
var inicioX = 200;
var inicioY = 300;
var lon = 35;
var margen = 20;
var pistaText = "";

/* Arreglos */
var teclas_array = new Array();
var letras_array = new Array();
var palabras_array = new Array();

/* Variables de control */
var aciertos = 0;
var errores = 0;

/* Palabras */
palabras_array.push("LEON");
palabras_array.push("CABALLO");
palabras_array.push("PERRO");
palabras_array.push("GATO");
palabras_array.push("RATÓN");
palabras_array.push("PINGUINO");
palabras_array.push("ZEBRA");
palabras_array.push("RINOCERONTE");
palabras_array.push("TIBURON");
palabras_array.push("CARACOL");
palabras_array.push("ALACRAN");
palabras_array.push("ARAÑA");
palabras_array.push("CHAPULIN");
palabras_array.push("AVESTRUZ");
palabras_array.push("MUSARAÑA");
palabras_array.push("AGUILA");


        /// Funcion para dar una pista la usuario ////
        function pistaFunction(palabra) {
          let pista = ""; // Se crea la variable local pista que contendra nuestra frase de pista
          switch (palabra) {  // Se crea un switch para poder controlar las pistas segun la palabra 
              case 'LEON':   // Se debera hacer un case por cada palabra 
                  pista = "Ruge y es fuerte";
                  break;     // Es importante el break en cada case 
              case 'CABALLO':
                  pista = "Hay de tierra y hay de mar";
                  break;
              case 'PERRO':
                  pista = "El mejor amigo del hombre";
                  break;
              case 'GATO':
                  pista = "Son tiernos pero arañan";
                  break;
              case 'GATO':
                pista = "Le encanta el queso";
                break;
              case 'PINGUINO':
                pista = "Son pájaros que viven en la Antártida";
                break;
              case 'ZEBRA':
                pista = "Su pelaje es de rayas";
                break;
                case 'RINOCERONTE':
                  pista = "Dos cuernos en su frente y muy gordo";
                  break;
                case 'TIBURON':
                  pista = "El más peligroso del mar";
                  break;
                case 'CARACOL':
                  pista = "Concha en espiral baboso";
                  break;
                case 'ALACRAN':
                  pista = "Un par de pinzas de agarre y su cola venenosa";
                  break;
                case 'ARAÑA':
                  pista = "Tienen 8 patas y es peludo";
                case 'CHAPULIN':
                  pista = "Insecto verde y lo comen en México ";
                  break;
                case 'AVESTRUZ':
                  pista = "Un ave grande que no vuela,pero es corredora.";
                  break;
                case 'MUSARAÑA':
                  pista = "Las especies de mamíferos más pequeñas del mundo.";
                  break;
                case 'AGUILA':
                  pista = "Las aves de presa";
                  break;
                
              default:  // El defaul se puede omitir // 
                  pista = "No hay pista";
          }
          // Pintamos la palabra en el canvas , en este ejemplo se pinta arriba a la izquierda //
          // ctx.fillStyle = "black";  // Aqui ponemos el color de la letra
          // ctx.font = "bold 20px Courier";  // aqui ponemos el tipo y tamaño de la letra
          // ctx.fillText(pista, 10, 15);  // aqui ponemos la frase en nuestro caso la variable pista , seguido de la posx y posy

          console.log(pista);
          pista_input.value = pista;
      }

      

      function pintaPalabra() {
        var p = Math.floor(Math.random() * palabras_array.length);
        palabra = palabras_array[p];

        pistaFunction(palabra);

        console.log(palabra)
        // var w = canvas.width;
        // var len = palabra.length;
        // var ren = 0;
        // var col = 0;
        // var y = 230;
        // var lon = 50;
        // var x = (w - (lon + margen) * len) / 2;
        // for (var i = 0; i < palabra.length; i++) {
        //     letra = palabra.substr(i, 1);
        //     miLetra = new Letra(x, y, lon, lon, letra);
        //     miLetra.dibuja();
        //     letras_array.push(miLetra);
        //     x += lon + margen;
        // }
    }

    pintaPalabra();
//Options values for buttons
let options = {
  Animales: [
    "Apple",
    "Blueberry",
    "Mandarin",
    "Pineapple",
    "Pomegranate",
    "Watermelon",
  ],
  animales: ["Hedgehog", "Rhinoceros", "Squirrel", "Panther", "Walrus", "Zebra"],
  paises: [
    "India",
    "Hungary",
    "Kyrgyzstan",
    "Switzerland",
    "Zimbabwe",
    "Dominica",
  ],
};

//count
let winCount = 0;
let count = 0;

let chosenWord = palabra;

//Display option buttons
const displayOptions = () => {
  optionsContainer.innerHTML += `<h3>Seleccione una opción</h3>`;
  let buttonCon = document.createElement("div");
  for (let value in options) {
    buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
  }
  optionsContainer.appendChild(buttonCon);
};

//Block all the Buttons
const blocker = () => {
  optionsContainer.innerHTML += `<h3 class="pista">Pista</h3>`; 

  let optionsButtons = document.querySelectorAll(".options");
  let letterButtons = document.querySelectorAll(".letters");
  //disable all options
  optionsButtons.forEach((button) => {
    button.disabled = true;
  });

  //disable all letters
  letterButtons.forEach((button) => {
    button.disabled.true;
  });
  newGameContainer.classList.remove("hide");
};

//Word Generator
const generateWord = (optionValue) => {
  let optionsButtons = document.querySelectorAll(".options");
  //If optionValur matches the button innerText then highlight the button
  optionsButtons.forEach((button) => {
    if (button.innerText.toLowerCase() === optionValue) {
      button.classList.add("active");
    }
    button.disabled = true;
  });

  //initially hide letters, clear previous word
  letterContainer.classList.remove("hide");
  userInputSection.innerText = "";

  let optionArray = options[optionValue];
  //choose random word
  // chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
  // chosenWord = chosenWord.toUpperCase();

  //replace every letter with span containing dash
  let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>');

  //Display each element as span
  userInputSection.innerHTML = displayItem;
};

//Initial Function (Called when page loads/user presses new game)
const initializer = () => {
  winCount = 0;
  count = 0;

  //Initially erase all content and hide letteres and new game button
  userInputSection.innerHTML = "";
  optionsContainer.innerHTML = "";
  letterContainer.classList.add("hide");
  newGameContainer.classList.add("hide");
  letterContainer.innerHTML = "";

  //For creating letter buttons
  for (let i = 65; i < 91; i++) {
    let button = document.createElement("button");
    button.classList.add("letters");
    //Number to ASCII[A-Z]
    button.innerText = String.fromCharCode(i);
    //character button click
    button.addEventListener("click", () => {
      let charArray = chosenWord.split("");
      let dashes = document.getElementsByClassName("dashes");
      //if array contains clciked value replace the matched dash with letter else dram on canvas
      if (charArray.includes(button.innerText)) {
        charArray.forEach((char, index) => {
          //if character in array is same as clicked button
          if (char === button.innerText) {
            //replace dash with letter
            dashes[index].innerText = char;
            //increment counter
            winCount += 1;
            //if winCount equals word lenfth
            if (winCount == charArray.length) {
              resultText.innerHTML = `<h2 class='win-msg'>Ganaste!!</h2><p>La palabra era <span>${palabra}</span></p>`;
              //block all buttons
              blocker();
            }
          }
        });
      } else {
        //lose count
        count += 1;
        //for drawing man
        drawMan(count);
        //Count==6 because head,body,left arm, right arm,left leg,right leg
        if (count == 6) {
          resultText.innerHTML = `<h2 class='lose-msg'>Perdiste!!</h2><p>La palabra era <span>${palabra}</span></p>`;
          blocker();
        }
      }
      //disable clicked button
      button.disabled = true;
    });
    letterContainer.append(button);
  }

  displayOptions();
  //Call to canvasCreator (for clearing previous canvas and creating initial canvas)
  let { initialDrawing } = canvasCreator();
  //initialDrawing would draw the frame
  initialDrawing();
};

//Canvas
const canvasCreator = () => {
  let context = canvas.getContext("2d");
  context.beginPath();
  context.strokeStyle = "#000";
  context.lineWidth = 2;

  //For drawing lines
  const drawLine = (fromX, fromY, toX, toY) => {
    context.moveTo(fromX, fromY);
    context.lineTo(toX, toY);
    context.stroke();
  };

  const head = () => {
    context.beginPath();
    context.arc(70, 30, 10, 0, Math.PI * 2, true);
    context.stroke();
  };

  const body = () => {
    drawLine(70, 40, 70, 80);
  };

  const leftArm = () => {
    drawLine(70, 50, 50, 70);
  };

  const rightArm = () => {
    drawLine(70, 50, 90, 70);
  };

  const leftLeg = () => {
    drawLine(70, 80, 50, 110);
  };

  const rightLeg = () => {
    drawLine(70, 80, 90, 110);
  };

  //initial frame
  const initialDrawing = () => {
    //clear canvas
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    //bottom line
    drawLine(10, 130, 130, 130);
    //left line
    drawLine(10, 10, 10, 131);
    //top line
    drawLine(10, 10, 70, 10);
    //small top line
    drawLine(70, 10, 70, 20);
  };

  return { initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg };
};

//draw the man
const drawMan = (count) => {
  let { head, body, leftArm, rightArm, leftLeg, rightLeg } = canvasCreator();
  switch (count) {
    case 1:
      head();
      break;
    case 2:
      body();
      break;
    case 3:
      leftArm();
      break;
    case 4:
      rightArm();
      break;
    case 5:
      leftLeg();
      break;
    case 6:
      rightLeg();
      break;
    default:
      break;
  }
};

//New Game
newGameButton.addEventListener("click", initializer);
window.onload = initializer;