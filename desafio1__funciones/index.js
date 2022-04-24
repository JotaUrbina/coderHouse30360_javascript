/*Este es un programa que calcula cómo afecta X tasa de interés de acuerdo al monto 
y número de cuotas ingresados por el usuario. Dicho de otra forma, cuánto terminarás
devolviendo al banco. **Las tasas de interés no son reales, solo para efectos prácticos*/

//Declaración de funciones

const money = () => parseFloat(prompt("¿Cuánto dinero quieres pedir?"));
const cuotas = () =>
  parseFloat(prompt("¿En cuántas cuotas? Elige entre \n 3 - 6 - 12 - 18"));
const total = (total) => alert(`El valor total del crédito es ${total}`);

function calcularOtraVez(again) {
  again = prompt("¿Calcular otra vez? Escribe \n SI o NO");
  again = again.toUpperCase();
  if (again === "SI") {
    calcularCredito(money(), cuotas());
  }
}

function calcularCredito(money, cuotas, res) {
  switch (cuotas) {
    case 3:
      res = money + money * 0.33;
      total(res);
      break;
    case 6:
      res = money + money * 0.66;
      total(res);
      break;
    case 12:
      res = money + money * 0.88;
      total(res);
      break;
    case 18:
      res = money + money * 1;
      total(res);
      break;
    default:
      alert("Error en los datos");
  }
  calcularOtraVez();
}

// Aquí se ejecuta el programa
alert(
  "Hola, este es un simulador de créditos para calcular cuánto afectan los intereses."
);
calcularCredito(money(), cuotas());
alert("Muchas gracias por usar la calculadora de crédito");
