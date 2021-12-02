// ----------------------------- FUNÇÕES CALLBACK ------------------------------------- //

{
    const venderPao = () => {

        const nome = prompt("Bom dia. Qual o seu nome?")

        const quantidade  = prompt("Quantos pães?")

        console.log(`O cliente ${nome} pediu ${quantidade} pães`)
    }

venderPao()

console.log("Depois da função")
}

{
    const venderPao = () => {
    
        const nome = prompt("Bom dia. Qual o seu nome?")
    
        const quantidade  = prompt("Quantos pães?")
    
        const resultado =`O cliente ${nome} pediu ${quantidade} pães`

        return resultado
    }
    
    const resulVenderPao = venderPao()
    
    console.log(resulVenderPao)
}

// ---------------------------------------------------------------------------------------------- //

{
    const soma = (elemento1, elemento2) => {

        const soma = elemento1 + elemento2

        return soma
    }

    const result = soma(5,5)

    const produto = result * 10



    console.log("O resultado da soma é", result)
    console.log("O resultado da multiplicação é", produto)
}

// ---------------------------------------------------------------------------------------------- //

{
    const verificarPar = (numero, funcaoDeImprimir) => {

        if (numero % 2 === 0) {

            const resultado = numero / 2

            const result = funcaoDeImprimir(resultado)

            return resultado

        } else {

            return numero
        }
    }

    const imprimeMensagem = (valor) => {

        const frase = "O valor da divisão é" + valor

        return frase
    }

    const result = verificarPar(6, imprimeMensagem)

    console.log(result)

}

// ------------------------------------ EXERCÍCIO 01 ---------------------------------- //

{

    const verificaImpar = (numero, funcaoImpressaoImpar, funcaoImpressaoPar) => {

        if (numero  % 2 !== 0) {

            funcaoImpressaoImpar()

        } else {

            funcaoImpressaoPar()
        }
    }

    const callBackImpressaoImpar = () => {

        console.log("Sim, o número é ímpar")
    }

    const callBackImpressaoPar = () => {

        console.log("Não, o número não é ímpar")
    }

    verificaImpar(8, callBackImpressaoImpar, callBackImpressaoPar)
}

// ------------------------------------ ARRAY.MAP ---------------------------------- //

{

    const arrayDeTestes = [1, 2, 3, 4, 5]

    const funcaoDeTransformacao = (elemento, indice, array) =>{

        return elemento * 10
    }

    const arrayMultiplicada = arrayDeTestes.map(funcaoDeTransformacao)

    console.log("Original:", arrayDeTestes)

    console.log("Multiplicada:", arrayMultiplicada)
}

{

    const arrayDeTestes = [1, 2, 3, 4, 5]

    const funcaoDeTransformacao = (elemento, indice) =>{

        return `O número da posição ${indice} vale ${elemento}`
    }

    const arrayMultiplicada = arrayDeTestes.map(funcaoDeTransformacao)

    console.log("Transformação:", arrayMultiplicada)
}

{
    
    const arrayDeObjetos = [
        {turma: "Guimarães", periodo: "noturno"},
        {turma: "Lovelace", periodo: "integral"},
        {turma: "Gebru", periodo: "noturno"}
    ]

    const funcaoTransformaNome = (element, indice) => {

        return element.turma
    }

    const arrayDeNomes = arrayDeObjetos.map((element, indice) => {

        return element.turma
    })

    const arrayDePeriodos = arrayDeObjetos.map((element, indice) => {

        return element.periodo
    })

    console.log(arrayDeNomes)
    console.log(arrayDePeriodos)

    const turmasNoturnas = arrayDeObjetos.filter((elemento) => {

        const isNoturna = elemento.periodo === "noturno"

        return isNoturna
    })

    console.log(turmasNoturnas)
}

{
    const numeros = [1,3,5,7,9,34,6,77,22]

    const maioresDoQue10 = numeros.filter((numero) => {

        return numero > 10

    })

    console.log(maioresDoQue10)

    const numerosPares = numeros.filter((numero) => {

        if (numero % 2 === 0) {

            return true
        }

        return false
    })

    console.log(numerosPares)

}
