function calcular() {
    const valor1 = document.getElementById("numero1").value;
    const valor2 = document.getElementById("numero2").value;
    const operacao = document.getElementById("operacao").value;
    const resultado = document.getElementById("resultado");

    if (operacao === "") {
        resultado.value = "Cálculo inválido, selecione uma opção!";
        return;
    }

    if (valor1 === "") {
        resultado.value = "Digite o primeiro número!";
        return;
    }

    const numero1 = Number(valor1);
    const numero2 = Number(valor2);
    let conta;

    switch (operacao) {
        case "soma":
            if (valor2 === "") {
                resultado.value = "Digite o segundo número!";
                return;
            }
            conta = numero1 + numero2;
            break;
        case "subtracao":
            if (valor2 === "") {
                resultado.value = "Digite o segundo número!";
                return;
            }
            conta = numero1 - numero2;
            break;
        case "multiplicacao":
            if (valor2 === "") {
                resultado.value = "Digite o segundo número!";
                return;
            }
            conta = numero1 * numero2;
            break;
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
        case "potencia":
            if (valor2 === "") {
                resultado.value = "Digite o segundo número!";
                return;
            }
            conta = Math.pow(numero1, numero2);
            break;
        case "raiz":
            if (numero1 < 0) {
                resultado.value = "Não existe raiz real!";
                return;
            }
            conta = Math.sqrt(numero1);
            break;
    }

    resultado.value = conta;
}
