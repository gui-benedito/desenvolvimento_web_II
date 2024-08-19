const funcionarios = []
function adicionarFuncionario() {
    let cod = parseInt(prompt("Código: "))
    let horasTrabalhadas = parseInt(prompt("Horas trabalhadas no mês: "))
    let turno = prompt('"M" para matutino, "V" para vespertino, "N" para noturno').toLowerCase()
    let categoria = prompt('"F" para funcionário, "G" para gerente').toLowerCase()
    let salarioMinimo = parseFloat(prompt("Valor do salário mínimo: "))
    let valorHora = 0

    if (categoria === 'f'){
        if(turno === 'm') {
            valorHora = (0.1*salarioMinimo)
        }else if (turno === 'v') {
            valorHora = (0.12*salarioMinimo)
        }else {
            valorHora = (0.15*salarioMinimo)
        }
    } else {
        if(turno === 'm') {
            valorHora = (0.2*salarioMinimo)
        }else if (turno === 'v') {
            valorHora = (0.25*salarioMinimo)
        }else {
            valorHora = (0.3*salarioMinimo)
        }
    }
    let salarioInicial = valorHora * horasTrabalhadas
    let auxilioAlimentacao = salarioInicial <= 800 ? salarioInicial * 0.25 : salarioInicial <= 1200 ? salarioInicial * 0.2 : salarioInicial * 0.15
    let salarioFinal = salarioInicial + auxilioAlimentacao
    alert(`Código do funcionário: ${cod}\nNúmero de horas trabalhadas: ${horasTrabalhadas}\nValor da hora: ${valorHora}\nSalário inicial: R${salarioInicial.toFixed(2)}\nAuxílio Alimentação: R$${auxilioAlimentacao}\nSalário final: R$${salarioFinal.toFixed(2)}`)
    funcionarios.push({cod, horasTrabalhadas, turno, categoria, salarioInicial, auxilioAlimentacao, salarioFinal})
}
function pagamentoTotal(){
    let valorTotal = funcionarios.reduce((acm, funcionario) => {
        return acm += funcionario.salarioFinal
    }, 0)
    return alert(`Total pago: R$${valorTotal.toFixed(2)}`)
}

let opcao = ''
do{
    opcao = prompt("1 - Adicionar funcionário\n2 - Exibir Salário total pago\n3 - Sair")
    switch(opcao){
        case '1':
            adicionarFuncionario()
            break
        case '2':
            pagamentoTotal()
            break
        case '3':
            alert("Saindo...")
            break
        default:
            alert("Opção inválida!")
    }
}while(opcao !== '3')