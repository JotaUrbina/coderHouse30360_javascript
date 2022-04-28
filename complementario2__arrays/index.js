/*Este programa consiste en una calculadora de promedios. Para ello
se recojerán la cantidad X de números que el usuario desee y se calcularán
para devolver el promedio de dichos datos.*/

//Declaración de variables y funciones.

let number;
let userNumbers = [];

//GET USER NUMBER
/* Esta función se encarga de recojer los números del usuario (los que quiera)
a través de prompt para pushearlos a un array, con sus respectivas
comprobaciones*/
const getUserNumber = (n, ar) => {
  let i = 1;
  while (n != "esc") {
    n = prompt(`Ingresa el número ${i}.\n\nPara calcular, escribe ESC`);
    ar.push(parseFloat(n));
    i++;
    if (n === "ESC") {
      n = n.toUpperCase();
      break;
    } else if (isNaN(parseFloat(n)) && n != "esc" && n != "" && n != null) {
      ar.pop(n);
      i--;
      alert("Eso no es un número");
    } else if (n === "" || n === null) {
      ar.pop(n);
      i--;
      alert("no ingresaste nada");
    }
  }
  ar.pop(n);
  console.log(`El array es ${ar}`);
  return ar;
};

//GET AVERAGE
/*Esta función se encarga de sumar entre si los números ingresados por el usuario
para luego dividirlos por el length del array y obtener el promedio como 
resultado*/

const getAverage = (ar) => {
  let sumaLista = 0;
  let average;
  for (let i = 0; i < ar.length; i++) {
    sumaLista = sumaLista + ar[i];
  }
  if (ar.length === 0) {
    alert("No ingresaste ningún número. No se puede calcular ningún promedio.");
  } else {
    average = sumaLista / ar.length;
    alert(
      `El promedio es ${average}.\n\nGracias por usar la calculadora de promedios`
    );
  }
};

//AQUÍ SE EJECUTA EL PROGRAMA EN EL NAVEGADOR
alert("Hola, esta es una calculadora de promedios.");
getUserNumber(number, userNumbers);
getAverage(userNumbers);
