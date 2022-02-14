import './App.css';
import Exercicio01 from './Componentes/Exercicio01';
import Exercicio02 from './Componentes/Exercicio02';
import Exercicio03 from './Componentes/Exercicio03';


function App() {

  const frutas = [
    <li>Banana</li>,
    <li>laranja</li>,
    <li>Maçã</li>
  ]

  const frutasString = [
    "Banana",
    "Laranja",
    "Maçã"
  ]

  const estudantesGuimares = [
    "Bruno",
    "Juliana",
    "Bruno"
  ]

  const  frutasComponente = frutasString.map((fruta, index) => {
    return <li key={index}>{fruta}</li>
  })


  const estudantesComNomeRepetido = estudantesGuimares.map((estudante) => {

    return <li key={estudante}>{estudante}</li>
  })

  //teste de dados passados por referência

// let a = 20;
// let b = a;

// console.log("a", a);
// console.log("b", b);

// a = 10;

// console.log("a", a);
// console.log("b", b);

let c = [1, 2, 3];
let d = [...c];

// console.log("c", c);
// console.log("d", d);

c.push(4);
console.log("c", c);
console.log("d", d);


  return (
    <div>
      <h1>Boa noite, Guimarães!</h1>
      {frutas}
      {frutasString}
      <ol>{frutasComponente}</ol>
      {estudantesComNomeRepetido}
      
      <div>
        <Exercicio01/>

        <Exercicio02/>

        <Exercicio03/>
      </div>
    </div>
  );
}

export default App;
