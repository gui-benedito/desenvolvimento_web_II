const nome = prompt("Nome: ")
const altura = parseFloat(prompt("Altura(cm): ")) / 100
const peso = parseFloat(prompt("Peso(kg): "))
const imc = peso / (Math.pow(altura, 2))
let classificacao = ''
if (imc < 16) {
    classificacao = 'Baixo peso muito grave'
}else if (imc <= 16.99) {
    classificacao = 'Baixo peso grave'
}else if (imc <= 18.49) {
    classificacao = 'Baixo peso'
}else if (imc <= 24.99) {
    classificacao = 'Peso normal'
}else if (imc <= 29.99) {
    classificacao = 'Sobrepeso'
}else if (imc <= 34.99) {
    classificacao = 'Obesidade grau I'
}else if (imc <= 39.99) {
    classificacao = 'Obesidade grau II'
}else {
    classificacao = 'Obesidade grau III'
}
alert(`${nome} possui um Índice de Massa Corporal igual a ${imc.toFixed(2)}, sendo classificado como ${classificacao}`)