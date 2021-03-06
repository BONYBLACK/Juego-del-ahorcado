//Initial References
const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");
const pista_input = document.querySelector(".pista_input")

/* Arreglos */
var teclas_array = new Array();
var letras_array = new Array();
var categorias_array = new Array();
var palabras_array = new Array();

/* Variables de control */
var aciertos = 0;
var errores = 0;

console.log("Categorias: " + categorias_array);

/* Palabras */

//FRUTAS
palabras_array.push("Manzana");
palabras_array.push("Uvas");
palabras_array.push("Mandarina");
palabras_array.push("Platano");
palabras_array.push("Naranja");
palabras_array.push("Melon");

//ANIMALES
palabras_array.push("Perro");
palabras_array.push("Pollo");
palabras_array.push("Gato");
palabras_array.push("Caballo");
palabras_array.push("Pajaro");
palabras_array.push("Zebra");

//Paises
palabras_array.push("India");
palabras_array.push("Hungary");
palabras_array.push("Mexico");
palabras_array.push("Canada");
palabras_array.push("Francia");
palabras_array.push("Colombia");

//Famosos
palabras_array.push("Tom Holland");
palabras_array.push("Shakira");
palabras_array.push("Harry Styles");
palabras_array.push("Kenia Os");
palabras_array.push("IU");
palabras_array.push("Ariana Grande");


console.log("Arreglo " + palabras_array);

// for (let i = 0; i <= 5; i++) {
//     categorias_array.push(palabras_array[0] = "Frutas:" + palabras_array[i]);
// }

console.log(palabras_array[0]);
// let categorias_array = [["Frutas", palabras_array[0]], [3, 4]]
console.log("ARREGLO:" + categorias_array)

// categorias_array.push(palabras_array[0] = "Frutas:" + palabras_array[0]);
// categorias_array.push(palabras_array[0] = "Frutas:" + palabras_array[1]);
// categorias_array.push(palabras_array[0] = "Frutas:" + palabras_array[2]);
// categorias_array.push(palabras_array[0] = "Frutas:" + palabras_array[3]);
// categorias_array.push(palabras_array[0] = "Frutas:" + palabras_array[4]);
// categorias_array.push(palabras_array[1] = "Animales:" + palabras_array[1]);
// categorias_array.push(palabras_array[1] = "Paises:" + palabras_array[1]);
// categorias_array.push(palabras_array[1] = "Famosos:" + palabras_array[1]);


categorias_array.push(palabras_array[0]);
console.log("Categorias: " + categorias_array);


//Options values for buttons
let options = {
  frutas: [
    "Manzana",
    "Uvas",
    "Mandarina",
    "Platano",
    "Naranja",
    "Melon",
  ],
  animales: [
    "Perro",
    "Pollo",
    "Gato",
    "Caballo",
    "Pajaro",
    "Zebra"],
  paises: [
    "India",
    "Hungary",
    "Mexico",
    "Canada",
    "Francia",
    "Colombia",
  ],
  famosos: [
    "Tom Holland",
    "Shakira",
    "Harry Styles",
    "Kenia Os ",
    "IU",
    "Ariana Grande ",
  ],
};

//count
let winCount = 0;
let count = 0;

let chosenWord = "";

//Display option buttons
const displayOptions = () => {
  optionsContainer.innerHTML += `<h3>Seleccione una opci??n</h3>`;
  let buttonCon = document.createElement("div");
  for (let value in options) {
    console.log("Value: " + value)
    buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
    console.log("Value final: " + value)
  }
  optionsContainer.appendChild(buttonCon);
};

//Block all the Buttons
const blocker = () => {
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
  chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
  console.log("1: " + chosenWord);
  function pistaFunction(palabra) {
    let pista = ""; // Se crea la variable local pista que contendra nuestra frase de pista
    switch (palabra) {  // Se crea un switch para poder controlar las pistas segun la palabra 
        
      // FRUTAS
      case 'Manzana':
            pista = "Fruta roja";
            break;    
        case 'Uvas':
            pista = "Frutas peque??as moradas";
            break;
        case 'Mandarina':
            pista = "FALTA DESCRIPCI??N";
            break;
        case 'Platano':
            pista = "Fruta alargada de color amarillo";
            break;
        case 'Naranja':
          pista = "Fruta que es llamada como su color";
          break;
        case 'Melon':
          pista = "Coraz??n de...";
          break;

      // ANIMALES
      case 'Perro':
        pista = "<---FALTA DESCRIPCI??N--->";
        break;
      case 'Pollo':
        pista = "<---FALTA DESCRIPCI??N--->";
        break;  
      case 'Gato':
        pista = "<---FALTA DESCRIPCI??N--->";
        break;
      case 'Caballo':
        pista = "<---FALTA DESCRIPCI??N--->";
        break;
      case 'Pajaro':
        pista = "<---FALTA DESCRIPCI??N--->";
        break;
      case 'Zebra':
        pista = "<---FALTA DESCRIPCI??N--->";
        break; 

      // PAISES
      case 'India':
        pista = "<---FALTA DESCRIPCI??N--->";
        break;
      case 'Hungary':
        pista = "<---FALTA DESCRIPCI??N--->";
        break;  
      case 'Mexico':
        pista = "<---FALTA DESCRIPCI??N--->";
        break;
      case 'Canada':
        pista = "<---FALTA DESCRIPCI??N--->";
        break;
      case 'Francia':
        pista = "<---FALTA DESCRIPCI??N--->";
        break;
      case 'Colombia':
        pista = "<---FALTA DESCRIPCI??N--->";
        break;

      // FAMOSOS
      case 'Tom Holland':
        pista = "<---FALTA DESCRIPCI??N--->";
        break;
      case 'Shakira':
        pista = "<---FALTA DESCRIPCI??N--->";
        break;  
      case 'Harry Styles':
        pista = "<---FALTA DESCRIPCI??N--->";
        break;
      case 'Kenia Os':
        pista = "<---FALTA DESCRIPCI??N--->";
        break;
      case 'IU':
        pista = "<---FALTA DESCRIPCI??N--->";
        break;
      case 'Ariana Grande':
        pista = "<---FALTA DESCRIPCI??N--->";
        break;
      
      default: 
      pista = "No hay pista";

    }
    
    console.log("Final: " + chosenWord);
    pista_input.value = pista;
}

  pistaFunction(chosenWord);


  chosenWord = chosenWord.toUpperCase();
  console.log("2: " + chosenWord);

  //replace every letter with span containing dash
  let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>');
  console.log("3: " + chosenWord);


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
              console.log("4: " + chosenWord);
              resultText.innerHTML = `<h2 class='win-msg'>Ganaste!!</h2><p>La palabra era <span>${chosenWord}</span></p>`;
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
          resultText.innerHTML = `<h2 class='lose-msg'>Perdiste!!</h2><p>La palabra era <span>${chosenWord}</span></p>`;
          blocker();
        }
      }
      //disable clicked button
      button.disabled = true;
    });
    letterContainer.append(button);

    function pistaFunction(chosenWord) {
        let pista = ""; // Se crea la variable local pista que contendra nuestra frase de pista
        switch (chosenWord) {  // Se crea un switch para poder controlar las pistas segun la palabra 
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
                pista = "Son tiernos pero ara??an";
                break;
            case 'GATO':
              pista = "Le encanta el queso";
              break;
            case 'PINGUINO':
              pista = "Son p??jaros que viven en la Ant??rtida";
              break;
            case 'ZEBRA':
              pista = "Su pelaje es de rayas";
              break;
            default:  // El defaul se puede omitir // 
                pista = "No hay pista";
        }
        // Pintamos la palabra en el canvas , en este ejemplo se pinta arriba a la izquierda //
        // ctx.fillStyle = "black";  // Aqui ponemos el color de la letra
        // ctx.font = "bold 20px Courier";  // aqui ponemos el tipo y tama??o de la letra
        // ctx.fillText(pista, 10, 15);  // aqui ponemos la frase en nuestro caso la variable pista , seguido de la posx y posy

        console.log(chosenWord);
        pista_input.value = chosenWord;
    }
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