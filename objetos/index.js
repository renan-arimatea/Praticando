// ------------------------------------ OBJETOS ------------------------------------ //

const nomeDoObjeto =  {

    nome: "Renan",
    apelido: "Arima",
    idade: 26
}

console.log(nomeDoObjeto)

const instrutora =  {

    nome: "Camis",
    apelido: "Ca",
    idade: 27,
    resposabilidades:["Dar aula", "Corrigir exercício", "Mandar mensagem"],
    responderSlack: () => {
        console.log("Olá  Aluno, alguma dúvida?")
    },

    /* aulas: {
        funcoes: true,
        variaveis: false
    } */
}

console.log(instrutora)

console.log("O nome da instrutora é:", instrutora.nome)

instrutora.nome = "Camila" // alterando dados do objeto

console.log("O nome da instrutora é:", instrutora.nome)

console.log("A idade da instrutora é:", instrutora["nome"])


// -------------------------------  ARRAY DE OBJETOS ------------------------------------- //

const arrayDeObjetos = [

    {nome: "Renan", modulo: 1} ,
    {chave: "valor", chave: "valor", chave: "valor"} ,
    {chave: "valor", chave: "valor"}
]

console.log(arrayDeObjetos)

console.log(arrayDeObjetos[0])


const instrutora2 =  {

    nome: "Camis",
    apelido: "Ca",
    idade: 27,
    resposabilidades:["Dar aula", "Corrigir exercício", "Mandar mensagem"],
    responderSlack: () => {
        console.log("Olá  Aluno, alguma dúvida?")
    },

    aulas: {
        funcoes: true,
        variaveis: false
    } 
}

instrutora2.sobrenome = "monteiro" // adicionado um objeto que não existia

console.log(instrutora2)


// ----------------------------------- SPREAD DE OBJETOS ------------------------------------ //

const instrutora3 =  {

    nome: "Camis",
    apelido: "Ca",
    idade: 27,
    resposabilidades:["Dar aula", "Corrigir exercício", "Mandar mensagem"],
    responderSlack: () => {
        console.log("Olá  Aluno, alguma dúvida?")
    },

    aulas: {
        funcoes: true,
        variaveis: false
    }
}

const novaInstrutora =  {
    ...instrutora3,
    nome: "Alessandra",
    sobrenome: "Xavier"
}

console.log(instrutora3)
console.log(novaInstrutora)



// ----------------- EXERCÍCIO 01 ------------------- //

const filme = {

    direcao: "Pierre Coffin",
    nome: "Meu Malvado Favorito",
    anoDeLancamento: 2010,
    elenco: ["Steve Carell", "Russel Brand", "Julie Andrews", "Will  Arnett"],
    assistido:  true
}

console.log(filme.direcao)
console.log(filme["nome"])
console.log(filme.anoDeLancamento)
console.log(filme["elenco"])
console.log(`Renan já assistiu a este filme? ${filme.assistido}`)


// ------------------- EXERCÍCIO 02 ------------------- //

const pessoa = {
    nome: "Ricardo",
    idade: 35,
    generoMusicalFavorito: "rock'n roll"
}

console.log(`O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} anos e gosta muito de ${pessoa.generoMusicalFavorito}.`)


// ----------------------- EXERCÍCIO 03 ------------------ //

const filme2 = {

    direcao: "Pierre Coffin",
    nome: "Meu Malvado Favorito",
    anoDeLancamento: 2010,
    elenco: ["Steve Carell", "Russel Brand", "Julie Andrews", "Will  Arnett"],
    assistido:  true
}

filme2.personagens = ["Gru", "Victor", "Dr. Nefário"]

console.log(`O ${filme2.elenco[0]} é o: ${filme2.personagens[0]}`)
console.log(`O ${filme2.elenco[1]} é o: ${filme2.personagens[1]}`)
console.log(`O ${filme2.elenco[2]} é o: ${filme2.personagens[2]}`)

filme2.elenco[0] = "Xuxa"
console.log(filme2.elenco[0])

console.log(`O nome do filme é  ${filme2.nome}. Seus personagens são ${filme2.personagens[0]}, ${filme2.personagens[1]} e ${filme2.personagens[2]}.`)


// ------------------------- EXERCÍCIO 04 --------------------- //

function imprimirNoConsoleObjeto () {

    const novaPessoa  = {
        ...pessoa ,
        comidasPreferidas: ["Arroz e Feijão" , "Pizza" , "Churrasco"],
        melhorAmigo: {
            nome: "Pedro",
            idade: 26
        }
    }

    const frase = `O nome da pessoa é ${novaPessoa.nome} e suas comidas preferidas são  ${novaPessoa.comidasPreferidas[0]}, ${novaPessoa.comidasPreferidas[1]} e  ${novaPessoa.comidasPreferidas[2]}. Seu melhor amigo se chama ${novaPessoa.melhorAmigo.nome} e tem ${novaPessoa.melhorAmigo.idade}.`

    return frase
}

console.log(imprimirNoConsoleObjeto())
