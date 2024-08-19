function calculoMedia(nota1, nota2, nota3, peso1, peso2, peso3){
    return ((peso1 * nota1) + (peso2 * nota2)+(peso3 * nota3)) / (peso1+peso2+peso3)
}
function classificacao(media) {
    if(media <= 5){
        return 'F'
    }else if(media <= 6){
        return 'E'
    }else if(media <= 7){
        return 'D'
    }else if(media <= 8){
        return 'C'
    }else if(media <= 9){
        return 'B'
    }else{
        return 'A'
    }
}
let continuar = 0
do{
    let nota1 = parseFloat(prompt("Nota 1: "))
    let nota2 = parseFloat(prompt("Nota 2: "))
    let nota3 = parseFloat(prompt("Nota 3: "))
    let peso1, peso2, peso3
    let validInput = false
    while (!validInput) {
        peso1 = parseFloat(prompt("Peso 1: "))
        peso2 = parseFloat(prompt("Peso 2: "))
        peso3 = parseFloat(prompt("Peso 3: "))
        
        if (Number.isInteger(peso1) && Number.isInteger(peso2) && Number.isInteger(peso3)) {
            validInput = true
        } else {
            alert("Os pesos devem ser números inteiros. Tente novamente.")
        }
    }
    const media = calculoMedia(nota1, nota2, nota3, peso1, peso2, peso3)
    const nivel = classificacao(media)
    alert(`A média ponderada do aluno é ${media.toFixed(2)}, sendo classificada como: ${nivel}`)
    continuar = Number(prompt("Continuar?\n1-Sim / 0-Não\n"))
}while(continuar === 1)