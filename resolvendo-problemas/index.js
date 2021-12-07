// -------------------------------------------- EXERCÍCIO 01 ------------------------------------------- //

/* .
01- Em Bananinha City, chegou um novo carregamento de vacinas contra gripe. Porém, a distribuição está um caos, por não haver um sistema de gerenciamento das doses. Sua missão como pessoa desenvolvedora é ajudar a criar um sistema de controle para os futuros pacientes receberem as doses da vacina.

A aplicação deverá cadastrar o nome do(a) paciente, ano de nascimento, nacionalidade e se já tomou ou não a vacina no ano corrente. Essas informações serão guardadas em uma base de dados para futuras
consultas. Seu primeiro desafio consiste em, dada uma lista dos cidadãos de Bananinha City, selecionar as pessoas que: completam 60 anos ou mais no ano corrente; têm nacionalidade brasileira; e ainda não tomaram a vacina.
*/

{
    
    function selecionaPessoas (pessoas) {

        const resultadoFinal = []

        for (let pessoa of pessoas) {

            if (pessoa.nacionalidade === "brasileira" && !pessoa.tomouVacina && 2021 - pessoa.anoDoNascimento >= 60) {

                resultadoFinal.push(pessoa)
            }
        }

        return resultadoFinal
    }

    const pessoasDeBananinhaCity = [

        {
            nome: "Benevides Castro",
            anoDoNascimento: 1950,
            nacionalidade: "brasileira",
            tomouVacina: false
        },

        {
            nome: "Clara Ruiz",
            anoDoNascimento: 1993,
            nacionalidade: "colombiana",
            tomouVacina: true
        },

        {
            nome: "Maria Aparecida Luz",
            anoDoNascimento: 1961,
            nacionalidade: "brasileira",
            tomouVacina: false
        },
    ]

    console.log(selecionaPessoas(pessoasDeBananinhaCity))
}

// --------------------------------- IMPLEMENTANDO / REFATORANDO O CÓDIGO ---------------------------------- //

{

    function selecionaPessoas (pessoas) {

        const anoCorrente = new Date().getFullYear()

        return pessoas.filter(pessoa => {

            return (

                pessoa.nacionalidade === "brasileira" &&
                !pessoa.tomouVacina &&
                anoCorrente - pessoa.anoDoNascimento >= 60
            )
        })

    }

    const pessoasDeBananinhaCity = [

        {
            nome: "Benevides Castro",
            anoDoNascimento: 1950,
            nacionalidade: "brasileira",
            tomouVacina: false
        },
    
        {
            nome: "Clara Ruiz",
            anoDoNascimento: 1993,
            nacionalidade: "colombiana",
            tomouVacina: true
        },
    
        {
            nome: "Maria Aparecida Luz",
            anoDoNascimento: 1961,
            nacionalidade: "brasileira",
            tomouVacina: false
        },
    ]
    
    console.log(selecionaPessoas(pessoasDeBananinhaCity))
}
