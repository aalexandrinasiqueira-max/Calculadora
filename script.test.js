const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const script = fs.readFileSync(path.join(__dirname, "script.js"), "utf8");

function calcular({ numero1 = "", numero2 = "", operacao = "" } = {}) {
    let resultadoValue = "";
    const elements = {
        numero1: { value: numero1 },
        numero2: { value: numero2 },
        operacao: { value: operacao },
        resultado: {
            get value() {
                return resultadoValue;
            },
            set value(value) {
                resultadoValue = String(value);
            },
        },
    };

    const context = {
        document: {
            getElementById: (id) => elements[id],
        },
    };

    vm.runInNewContext(script, context);
    context.calcular();

    return elements.resultado.value;
}

describe("calculadora", () => {
    test.each([
        ["soma", "8"],
        ["subtracao", "2"],
        ["multiplicacao", "15"],
        ["divisao", "1.6666666666666667"],
        ["potencia", "125"],
    ])("executa a operação %s", (operacao, esperado) => {
        expect(calcular({ numero1: "5", numero2: "3", operacao })).toBe(esperado);
    });

    test("calcula a raiz quadrada", () => {
        expect(calcular({ numero1: "81", operacao: "raiz" })).toBe("9");
    });

    test("informa quando o primeiro número não foi preenchido", () => {
        expect(calcular({ numero2: "3", operacao: "soma" })).toBe(
            "Digite o primeiro número!"
        );
    });

    test.each(["soma", "subtracao", "multiplicacao", "divisao", "potencia"])(
        "pede o segundo número para a operação %s",
        (operacao) => {
            expect(calcular({ numero1: "5", operacao })).toBe(
                "Digite o segundo número!"
            );
        }
    );

    test("impede divisão por zero", () => {
        expect(calcular({ numero1: "5", numero2: "0", operacao: "divisao" })).toBe(
            "Não é possível dividir por zero!"
        );
    });

    test("impede raiz quadrada de número negativo", () => {
        expect(calcular({ numero1: "-4", operacao: "raiz" })).toBe(
            "Não existe raiz real!"
        );
    });
});