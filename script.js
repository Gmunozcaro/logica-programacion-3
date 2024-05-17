function calcularFactorial() {
    let numeroInput = document.getElementById("numeroInput").value;
    let numero = parseInt(numeroInput);

    if (isNaN(numero)) {
        alert("Por favor, ingrese un número válido.");
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerText = `El factorial de ${numero} es: ${factorial}`;
}
