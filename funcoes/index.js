//  EXERCÍCIO 01
{

    function imprimirNome(carro, idade, hobbie) {
        console.log(carro, idade, hobbie)
    }

    imprimirNome("Lua", 20, 'andar de moto')
    imprimirNome("Vitor", 20, 'fotografia')
    imprimirNome("Camila", 22)

}

//  EXERCÍCIO 02
{

    function soma (n1 , n2) {
        let soma = n1 + n2
        return soma
    }

    console.log(soma(5,5))
    console.log(soma(25,5))

}

console.log(soma(5,5))

//  EXEMPLO FUNÇÃO ANÔNIMA (A função esta dentro de uma variável)

const soma2 = function (n1 , n2) {

    let soma = n1 + n2

    return soma
}

console.log(soma2(5,5))

//  EXEMPLO DE ARROW FUNCTION =>

const soma3 = (n1,n2) => {
    return n1 + n2
}

console.log(soma3(4,4))
