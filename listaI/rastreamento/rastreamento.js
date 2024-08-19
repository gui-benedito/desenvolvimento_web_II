let regiao = ''
let frete = 0
let cota = 0
let desconto = 0
let opcao = ''
do{
    const pecas = Number(prompt("Número de peças: "))
    const distancia = Number(prompt("Distância percorrida (km): "))
    const rastreamento = prompt("Deseja rastreamento (S-Sim ou N-Não): ").toLowerCase() === 's'
    do{ 
        regiao = Number(prompt("Escolha a região de entrega:\n1-Sudeste\n2-Sul\n3-Centro-Oeste\n"))
        switch (regiao) {
        case 1: 
            cota = 1.20
            desconto = 0.12
            break
        case 2: 
            cota = 1.10
            desconto = 0.10
            break
        case 3: 
            cota = 1.15
            desconto = 0.08
            break
        default:
            alert("Região inválida!")
        }
        if (regiao <= 3){
            break
        }
    }while(true)
    if (pecas <= 1000) {
        frete = pecas * cota
    } else {
        let sobra = pecas - 1000
        frete = (1000 * cota) + (sobra * (cota * (1 - desconto)))
    }
    if (rastreamento) {
        frete += 200
    }
    const custoCombustivel = distancia * 5 
    frete += custoCombustivel
    alert(`O valor total do frete é de R$${frete.toFixed(2)}, incluindo R$${custoCombustivel.toFixed(2)} para combustível${rastreamento ? " e R$ 200,00 para rastreamento." : "."}`)
    opcao = prompt("1 - Nova consulta\n2 - Sair")
    if(opcao === '2'){
        break
    }
}while(true)