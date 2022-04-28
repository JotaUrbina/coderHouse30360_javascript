let number;
let userNumbers = [];

// versión 1

/* const getUserNumber = (n, z) => {
  while (n != "ESC") {
    n = prompt("Escribre tus números");
    z.push(parseFloat(n));
  }
  z.pop(n);
  console.log(`El array es ${z}`);
  return z;
}; */

// versión 2

/* const getUserNumber = (n, z) => {
  while (n != "esc") {
    n = prompt("Escribre tus números");
    n = n.toLowerCase();
    z.push(parseFloat(n));
    if (isNaN(parseFloat(n)) && n != "esc") {
      alert("Eso no es un numero");
      z.pop(n);
    }
  }
  z.pop(n);
  console.log(`El array es ${z}`);
  return z;
}; */

// versión 3

/* const getUserNumber = (n, ar) => {
  let i = 1;
  while (n != "esc") {
    n = prompt(`Escribe el número ${i}`);
    i++;
    ar.push(parseFloat(n));
    if (isNaN(parseFloat(n)) && n != "esc" && n != "" && n != null) {
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
}; */

// versión 4

/* const getUserNumber = (n, ar) => {
  let i = 1;
  while (n != "esc") {
    n = prompt(`Escribe el número ${i}`);
    i++;
    ar.push(parseFloat(n));
    switch (n) {
      case isNaN(parseFloat(n)):
        ar.pop(n);
        i--;
        alert("Eso no es un número");
        break;
      case "" || null:
        ar.pop(n);
        i--;
        alert("no ingresaste nada");
        break;
      case "esc":
        n = n.toLowerCase();
        break;
    }
  }
  ar.pop(n);
  console.log(`El array es ${ar}`);
  return ar;
}; */

// versión 5

const getUserNumber = (n, ar) => {
  let i = 1;
  while (n != "esc") {
    n = prompt(`Escribe el número ${i}`);
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

const getAverage = (ar) => {
  let sumaLista = 0;
  let average;
  for (let i = 0; i < ar.length; i++) {
    sumaLista = sumaLista + ar[i];
  }
  console.log(`la suma del array es ${sumaLista}`);
  if (ar.length === 0) {
    alert("No ingresaste ningún número. No se puede calcular ningún promedio.");
  } else {
    average = sumaLista / ar.length;
    alert(`El promedio es ${average}`);
  }
};

getUserNumber(number, userNumbers);
getAverage(userNumbers);
