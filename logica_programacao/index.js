// EXEMPLOS

{

    let a = 10
    let b = 20
    let c = -10
    let d = 15


    // operadores

    let soma = a + b
    let subtracao = a - b
    let multiplicacao = a * b
    let divisao = a / b
    let resto = a % b

    console.log(soma)
    console.log(subtracao)
    console.log(multiplicacao)
    console.log(divisao)
    console.log(resto)


    // abreviações de operadores

    //a = a + 5
    a += 5
    console.log("novo a", a)

    // a = a-5

    a -= 5
    console.log("novo a", a)

    // a = a * 5
    a *= 5
    console.log("novo a", a)

    // a = a / 5
    a /=  5
    console.log("novo a", a)

    // a = a % 5
    a %= 5
    console.log("novo a", a)


    // comparadores

    console.log(1 === 1)
    console.log("1" === 1)
    console.log(1 !== 1)
    console.log(1 !== 2)
    console.log(5 >= 10)
    console.log(5 <= 10)

}


//EXERCÍCIO 01

{

    const resultado1 = 3 + 4

    const resultado2 = (3 * 5)  /  2

    const resultado3 = (5 - 4) * -1

    const resultado4 = 234 % 5

    console.log(resultado1, resultado2, resultado3, resultado4)

}

//EXERCÍCIO 02

{

    const a = 10
    const b =  25

    const verificacao1 = a === b
    console.log(verificacao1)

    const verificacao2 = a !== b
    console.log(verificacao2)

    const verificacao3 = a > b
    console.log(verificacao3)

    const verificacao4  = a <= b
    console.log(verificacao4)

}

// EXERCÍCIO 03

{

    const a = true
    const b = false
    const c = true

    console.log( a && b)
    console.log( b && c)
    console.log( a && c)
    console.log( a && b)
    console.log( a && b && c)

}

// EXERCÍCIO 04

{

    const a = true
    const b = false
    const c = true

    console.log( a || b)
    console.log( !a )

}

// EXERCÍCIO 05

{

    /*
    variavel nome
    variavel ano de nascimento
    variavel ano atual

    mostrar:
    nome da pessoa com "Olá"
    mostrar a idade da pessoa
    verificar se é maior de idade
    verificar quantos anos ela terá em 2050
    */

    const nome = prompt("Qual o seu nome")
    const anoDeNascimento = Number(prompt("Qual seu ano de nascimento?"))
    const anoAtual  = Number(prompt("Qual o ano atual?"))

    const idade  = anoAtual - anoDeNascimento

    console.log("Nome: ", nome )
    console.log("Idade: ", idade)
    //console.log(`Idade: ${idade}`)
    console.log("é maior de idade: ", idade >= 18)
    console.log("idade em 2050: ", 2050 - anoDeNascimento)

}
