// ---------------------- EXEMPLO DE IF ----------------------------- //
{

    const condicao = true

    if (condicao) {

        console.log("Condição verdadeira,  entrei no if")

    }

}

// ---------------------- EXEMPLO DE IF ELSE ------------------------- //
{

    function  verAniversario () {

        if (aniversario === "outubro") {

            console.log("Mês de aniversário do Renan, pois dê presente")

        } else {

            console.log("Guarde dinheiro para o aniversário do Renan")
        }
    }

    let aniversario  = prompt("Digite o mês de aniversário")

    verAniversario(aniversario)

}

// ---------------------- EXEMPLO DE ELSE IF ------------------------- //
{

    function  verAniversario () {

        if (aniversario === "outubro") {

            console.log("Mês de aniversário do Renan, pois dê presente")

        } else if (aniversario === "junho") {

            console.log("Mês de aniversário do Pedro, pois dê presente")
        }

        else {

            console.log("Guarde dinheiro para os próximos aniversários")
        }
    }

    let aniversario  = prompt("Digite o mês de aniversário")

    verAniversario(aniversario)

}

// ---------------------- EXEMPLO DE SWITCH CASE ------------------------- //
{

    const clima = prompt("Qual é o clima atual?")

    switch(clima) {
        
        case "calor":
            console.log("Vamos pra praia")
            break
        
        case "frio": 
            console.log("Vamos subir pra serra")
            break

        case "nevando":
            console.log("Vamos esquiar")
            break

        default:
            console.log("Com esse clima, não dá prazer nada :-/")
    }

}

// ------------------ EXEMPLO DE CONDICIONAIS E OPERADORES ---------------------- //
{

    const condicao1 = true
    const condicao2 = false

    if(condicao1 && !condicao2) {

        // && ! => Operador de negação

        console.log("Entrei no if")

    } else  {

        console.log("Entrei no else")
    }

}

// ---------------------- EXERCÍCIO 01 ------------------------------- //
{

    function compararNumeros (num1, num2) {

        console.log("função compara números foi chamada")

        if (num1 === num2) {

            console.log("Top os números são iguais")
        }
    }

    usuarioNumero1  = Number(prompt("Digite o primeiro número:"))
    usuarioNumero2  = Number(prompt("Digite o segundo número:"))

    compararNumeros(usuarioNumero1, usuarioNumero2)

}

// ------------------------ EXERCÍCIO 02 ------------------------------ //
{

    function compararNumeros (num1, num2) {

        console.log("função compara números foi chamada")

        if (num1 === num2) {

            console.log("Top, os números são iguais")

        } else {

            console.log("Bad, os números são diferentes")
        }
    }

    Numero1  = Number(prompt("Digite o primeiro número:"))
    Numero2  = Number(prompt("Digite o segundo número:"))

    compararNumeros(Numero1, Numero2)

}

// ------------------------ EXERCÍCIO 03 ------------------------------ //
{

    function compararNumeros (num1, num2) {

        console.log("função compara números foi chamada")

        if (num1 > num2) {

            console.log("Número 01 é maior que o Número  02")

        } else if (num1 < num2) {

            console.log("Número 01 é menor que o Número  02")
        }

        else {
            
            console.log("Os números são iguais")
        }
    }

    Numero1  = Number(prompt("Digite o primeiro número:"))
    Numero2  = Number(prompt("Digite o segundo número:"))

    compararNumeros(Numero1, Numero2)

}

// ------------------------ EXERCÍCIO 04 ------------------------------ //
{

    const verificarTipoPokemon = (pokemonEscolhido) => {

        switch(pokemonEscolhido)  {

            case "Bulbasauro":
                console.log("Planta e Veneno")
                break

            case "Charmander":
                console.log("Fogo")
                break

            case "Squirtle":
                console.log("Água")
                break

            default:
                console.log("Tipo de Pokemon não encontrado")
        }
    }

    const  pokemonUsuario = prompt("Escolha um pokemon para saber o seu tipo: Bulbasauro, Charmander ou Squirtle ")

    verificarTipoPokemon(pokemonUsuario)

}

// ------------------------ EXERCÍCIO 05 ------------------------------ //
{

    const escolherCasa = (casaEscolhida) => {

        switch(casaEscolhida) {

            case "Harry Potter":
                console.log("É melhor que seja ... Grifinória!")
                break

            case "Hermione":
                console.log("É melhor que seja ... Grifinória!")
                break
            
            case "Ronald Weasley":
                console.log("É melhor que seja ... Grifinória!")
                break

            case "Ana":
                console.log("É melhor que seja ... Lufa-Lufa!")
                break

            case "Luna":
                console.log("É melhor que seja ... Corvinal!")
                break

            case "Narcisa":
                console.log("É melhor que seja ... Sonserina!")
                break

            default:
                console.log("Bye Bye Hogwarts, você não foi alocada!")
        }
        
    }

    const  escolhaDePersonagemUsuario = prompt("Escolha uma personagem para o Chapéu Seletor verificar a casa: Harry Potter, Ronald Weasley, Hermione, Ana, Luna ou Narcisa ")

    escolherCasa(escolhaDePersonagemUsuario)

}

// ------------------------ EXERCÍCIO 06 ------------------------------ //
{

    const dizerSePodeEstudar = (terminouEnsinoMedio, maiorDeIdade, cursandoOutraFaculdade) => {

        if(terminouEnsinoMedio && maiorDeIdade && !cursandoOutraFaculdade) {

            console.log("O estudante pode cursar a nossa faculdade")

        } else {

            console.log("Não pode cursar a nossa faculdade")
        }

    }

    let terminouEnsinoMedioUsuario = prompt("Você já terminou o Ensino Médio? Sim ou Não").toLowerCase() === "sim"
    let maiorDeIdadeUsuario = prompt("Você ja é maior de idade? Sim ou Não").toLowerCase() === "sim"
    let cursandoOutraFaculdadeUsuario = prompt("Você está cursando outra faculdade? Sim ou Não").toLowerCase() === "sim"

    dizerSePodeEstudar(terminouEnsinoMedioUsuario, maiorDeIdadeUsuario, cursandoOutraFaculdadeUsuario)

}
