{ //    CONCATENAR INFORMAÇÕES

    const nome = prompt("Seu nome")

    const cor = prompt("Sua cor favorita")

    console.log("A cor favorita de " + nome + " é " + cor)

    console.log(`A cor fvorita de ${nome} é ${cor}`)

}

{ //     CONTAR AS LETRAS

    const nomeString = "Renan Arimatea"

    console.log(nomeString.length)

}

{  //   COLOCAR EM MINÚSCULO

    const stringString = "AaAaAaAaAaAa"

    console.log(stringString.toLowerCase())

}

{ //    COLOCAR EM MAIÚSCULO

    const stringString = "AaAaAaAaAaAa"

    console.log(stringString.toUpperCase())

}

{ //     RETIRA ESPAÇOS DE FORMULÁRIOS
    const email  = "         renanmoraiz@gmail.com    "

    console.log(email.trim())
}

{ //     LOCALIZAR PALAVRAS

    const frase01 = "Eu amo cerveja"

    const temCerveja = frase01.includes("cerveja")

    console.log(temCerveja)
}

{ //   SUBSTITUI AS OCORRÊNCIAS

    const frase01 = "Eu amo cerveja, vou ali beber cerveja"

    //const novaFrase = frase01.replace("cerveja","vinho")

    const novaFrase = frase01.replaceAll("cerveja","vinho")

    console.log(novaFrase)
}

{ //    EXERCÍCIO 02

    const frase02 = "eu amoooo Labenu"

    const fraseMaiuscula = frase02.toUpperCase()

    const fraseMinuscula = fraseMaiuscula.replaceAll("O" , "I")

    console.log(fraseMinuscula)

    console.log(fraseMinuscula.length)
}

{ //    ARRAYS

    const listaDeCompras = ["arroz","feijão","agua","cerveja"]

    console.log(listaDeCompras[3])
}


{ //    EXERCÍCIO 03

    const dogs  = ["Golden","Pug","Pitbull","Pastor Alemão","Caramelo"]

    const posicao =  prompt("Digite um numero de 1 a 5")

    console.log(dogs[posicao -1]) // -1 para o usuário não ter que digitar 0 (tirar a posição 0  do array)
}

{ //   PROPRIEDADE LENGHT

    const dogs  = ["Golden","Pug","Pitbull","Pastor Alemão","Caramelo"]

    console.log(dogs.length)
}

{ //    ADICIONANDO E COLOCANDO ELEMENTOS

    const dogs  = ["Golden","Pug","Pitbull","Pastor Alemão","Caramelo"]

    dogs.pop() //sempre tira o último elemento
    console.log(dogs)

    dogs.push("Labrador") //adiciona sempre no final
    console.log(dogs)
}

{ //    MÉTODO SPLICE

    const letras = ["A", "B", "C", "D", "E", "F", "G", "H"]

    console.log(letras.length)

    //letras.splice(2,1)
    //console.log(letras)

    letras.splice(3,2)
    console.log(letras)
}

{ //    EXEMPLO DE SPLICE

    const usuario = ["Renan", 25, "renanmoraiz@gmail.com", "Woody", "Pipoca"]
    console.log(usuario)

    usuario.splice(2,1)
    console.log(usuario)
}

{ //    EXERCÍCIO 04
    const numeros = [1, 2, 3, 4, 5, 6]
    console.log(numeros.length)

    numeros.push(7)
    console.log(numeros)

    numeros.splice(3,2)
    console.log(numeros)
}
