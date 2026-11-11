function calcular() {

    // Receber os valores digitados
    let valor1 = document.getElementById("numero1").value;
    let valor2 = document.getElementById("numero2").value;

    // Receber a operação escolhida
    let operacao = document.getElementById("operacao").value;

    // Campo do resultado
    let resultado = document.getElementById("resultado");

    // Verificar o primeiro número
    if (valor1 === "") {
        resultado.value = "Digite o primeiro número!";
        return;
    }

    // Converter para números
    let numero1 = Number(valor1);
    let numero2 = Number(valor2);

    let conta;

    // Escolher a operação
    switch (operacao) {

        // SOMA
        case "soma":

            if (valor2 === "") {
                resultado.value = "Digite o segundo número!";
                return;
            }

            conta = numero1 + numero2;
            break;

        // SUBTRAÇÃO
        case "subtracao":

            if (valor2 === "") {
                resultado.value = "Digite o segundo número!";
                return;
            }

            conta = numero1 - numero2;
            break;

        // MULTIPLICAÇÃO
        case "multiplicacao":

            if (valor2 === "") {
                resultado.value = "Digite o segundo número!";
                return;
            }

            conta = numero1 * numero2;
            break;

        // DIVISÃO
        case "divisao":

            if (valor2 === "") {
                resultado.value = "Digite o segundo número!";
                return;
            }

            if (numero2 === 0) {
                resultado.value = "Não é possível dividir por zero!";
                return;
            }

            conta = numero1 / numero2;
            break;

        // POTÊNCIA
        case "potencia":

            if (valor2 === "") {
                resultado.value = "Digite o segundo número!";
                return;
            }

            conta = Math.pow(numero1, numero2);
            break;

        // RAIZ QUADRADA
        case "raiz":

            if (numero1 < 0) {
                resultado.value = "Não existe raiz real!";
                return;
            }

            conta = Math.sqrt(numero1);
            break;
    }

    // Mostrar o resultado
    resultado.value = conta;
}
function calcular() {

    // Receber os valores digitados
    let valor1 = document.getElementById("numero1").value;
    let valor2 = document.getElementById("numero2").value;

    // Receber a operação escolhida
    let operacao = document.getElementById("operacao").value;

    // Campo do resultado
    let resultado = document.getElementById("resultado");

    // Verificar se o usuário escolheu uma operação válida
    if (operacao === "") {
        resultado.value = "Cálculo inválido, selecione uma opção!";
        return;
    }

    // Verificar o primeiro número
    if (valor1 === "") {
        resultado.value = "Digite o primeiro número!";
        return;
    }

    // Converter para números
    let numero1 = Number(valor1);
    let numero2 = Number(valor2);

    let conta;

    // Escolher a operação
    switch (operacao) {

        // SOMA
        case "soma":

            if (valor2 === "") {
                resultado.value = "Digite o segundo número!";
                return;
            }

            conta = numero1 + numero2;
            break;

        // SUBTRAÇÃO
        case "subtracao":

            if (valor2 === "") {
                resultado.value = "Digite o segundo número!";
                return;
            }

            conta = numero1 - numero2;
            break;

        // MULTIPLICAÇÃO
        case "multiplicacao":

            if (valor2 === "") {
                resultado.value = "Digite o segundo número!";
                return;
            }

            conta = numero1 * numero2;
            break;

        // DIVISÃO
        case "divisao":

            if (valor2 === "") {
                resultado.value = "Digite o segundo número!";
                return;
            }

            if (numero2 === 0) {
                resultado.value = "Não é possível dividir por zero!";
                return;
            }

            conta = numero1 / numero2;
            break;

        // POTÊNCIA
        case "potencia":

            if (valor2 === "") {
                resultado.value = "Digite o segundo número!";
                return;
            }

            conta = Math.pow(numero1, numero2);
            break;

        // RAIZ QUADRADA
        case "raiz":

            if (numero1 < 0) {
                resultado.value = "Não existe raiz real!";
                return;
            }

            conta = Math.sqrt(numero1);
            break;
    }

    // Mostrar o resultado
    resultado.value = conta;
}
