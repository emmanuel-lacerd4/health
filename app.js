/**
 * APP Health Calc
 * Calculadora métricas de saúde
 * @author Emmanuel L. Nogueira
 * @version 1.0
 * @link https://github.com/emmanuel-lacerd4/health
 */

// Variáveis
let peso, altura, imc, idade, fcm, litros, get

function calcular() {
    // Captura das variáveis idade, peso e altura
    idade = frmHealth.txtIdade.value
    peso = frmHealth.txtPeso.value
    altura = frmHealth.txtAltura.value

    // Validação de campos obrigatórios(todos)
    if (frmHealth.txtIdade.value === "") {
        alert("Informe a sua idade")
        frmHealth.txtIdade.focus()
    } else if (frmHealth.txtPeso.value === "") {
        alert("Informe o seu peso")
        frmHealth.txtPeso.focus()
    } else if (frmHealth.txtAltura.value === "") {
        alert("Informe a sua altura em centímetros")
        frmHealth.txtAltura.focus()
    } else if (document.getElementById("m").checked === false && document.getElementById("f").checked === false ) {
        alert("Selecione o seu sexo")
    }
}

function limpar() {

}