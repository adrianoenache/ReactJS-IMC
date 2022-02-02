// My First app React

import parse from "html-react-parser";
import { useState } from 'react';
import './app.css';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [mensagem, setMensagem] = useState('Qual será o seu IMC?');

  const atualizarCampos = (e) => {
    if(e.target.name === 'peso') {
      setPeso(e.target.value);
    }

    if(e.target.name === 'altura') {
      setAltura(e.target.value);
    }
  }

  const limparCampos = () => {
    setPeso('');
    setAltura('');
  }

  const calcularIMC = (e) => {
    e.preventDefault();

    let alt = altura / 100;
    let imc = peso / (alt * alt);
    let result = imc.toFixed(2);

    if(result < 18.6) {

      // console.log(`Você está abaixo do peso ideal! Seu IMC é de: ${result}`);
      setMensagem(`Você está abaixo do peso ideal! Seu IMC é de: <strong>${result}</strong>`);

    } else if(result >= 18.6 && result < 24.9) {

      // console.log(`Você está no peso ideal! Seu IMC é de: ${result}`);
      setMensagem(`Você está no peso ideal! Seu IMC é de: <strong>${result}</strong>`);

    } else if(result >= 24.9 && result < 34.9) {

      // console.log(`Você está levemente acima do peso ideal! Seu IMC é de: ${result}`);
      setMensagem(`Você está levemente acima do peso ideal! Seu IMC é de: <strong>${result}</strong>`);

    } else if(result > 24.9) {

      // console.log(`Você está acima do peso ideal! Seu IMC é de: ${result}`);
      setMensagem(`Você está acima do peso ideal! Seu IMC é de: <strong>${result}</strong>`);

    }
  }

  return (
    <div className="app">
      <h1>
        Calculadora de IMC
      </h1>
      <p>
        Vamos calcular o seu IMC:
      </p>
      <form action="/#">
        <fieldset className="wrapper-fields area-input">
          <label htmlFor="peso">
            Peso (kg)
          </label>
          <input
            type="number"
            name="peso"
            id="peso"
            placeholder="Informe seu peso em quilograma (kg)."
            value={peso}
            onChange={ (e) => atualizarCampos(e) }
            min="1"
            max="600"
            required
          />
          <label htmlFor="altura">
            Altura (cm)
          </label>
          <input
            type="number"
            name="altura"
            id="altura"
            placeholder="Informe sua altura em centímetros (cm)."
            value={altura}
            onChange={ (e) => atualizarCampos(e) }
            min="20"
            max="300"
            required
          />
        </fieldset>
        <button className="button" type="reset" onClick={limparCampos}>Limpar campos</button>
        <button className="button" type="submit" onClick={calcularIMC}>Calcular</button>
      </form>
      <p>
        {parse(mensagem)}
      </p>
    </div>
  );
}

export default App;
