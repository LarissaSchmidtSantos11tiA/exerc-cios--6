
/* 1-exercício*/

function mensagem() {
    console.log("Seja bem-vindo(a)!")
    console.log("É um prazer tê-lo aqui.")
    console.log("Aproveite")

}

mensagem()


/* 2-exercício*/

function somarNumeros(valor1, valor2) {

    let soma = valor1 + valor2
    console.log(soma) 
}
    
console.log(soma)
somarNumeros(15, 27)


/* 3-exercício*/

function boasVindas(nome, cargo) {
    console.log(`Seja bem-vindo(a) ${cargo} ${nome}!`)  
}
    
boasVindas("Marcio", "professor")


/* 4-exercício*/

function somar(valor1, valor2) {
    return valor1 + valor2
}
    
let resultado = somar(29, 32)
    
console.log(somar(12, 12))
console.log(resultado)


/* 5-exercício*/

function boasVindas(nome, cargo) {
    return `Seja bem-vindo(a) ${cargo} ${nome}!`
}
    
let mensagem = boasVindas("Marcio", "professor")
    
console.log(mensagem)


/* 6-exercício*/

function parImpar(valor) {
    if (valor % 2 == 0) {
        return "par"
    }

    return "ímpar"
    
}
    
let verificao = parImpar(13)
    
console.log(verificao)
