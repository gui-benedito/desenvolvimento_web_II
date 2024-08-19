const nome = prompt('Nome: ')
let idade = 0
const faixasEtarias = [
    { limite: 15, classificacao: 'Criança' },
    { limite: 30, classificacao: 'Jovem' },
    { limite: 60, classificacao: 'Adulto' },
    { limite: Infinity, classificacao: 'Idoso' },
]
const classificarIdade = (nome, idade) => {
    for (const faixa of faixasEtarias) {
        const {limite, classificacao} = faixa
        if (idade < limite) {
            return `${nome} tem ${idade} anos e é classificado como: ${classificacao}`
        }
    }
}
let opcao = 0
do {
    do {
        idade = parseFloat(prompt("Idade: "))
        if (Number.isInteger(idade)) {
            break
        }
        alert('Erro, a idade precisa ser um número inteiro positivo')
    } while (true)
    alert(classificarIdade(nome, idade))
    opcao = parseInt(prompt("Continuar? 0-Não 1-Sim"))
    if (opcao === 0) {
        break
    }
} while (true)