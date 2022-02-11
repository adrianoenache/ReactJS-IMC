// My First app React
import parse from "html-react-parser";
import { useState } from 'react';
import { ImNotification } from "react-icons/im";
import './index.css';

function App() {
  const messageDefault = 'Qual será o seu IMC?';
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [mensagem, setMensagem] = useState(messageDefault);

  const atualizarCampos = (e) => {

    setMensagem(messageDefault);

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
    setMensagem(messageDefault);
  }

  const calcularIMC = (e) => {
    e.preventDefault();

    limparCampos();

    let alt = altura / 100;
    let imc = peso / (alt * alt);
    let result = imc.toFixed(2);

    if(result < 16) {

      setMensagem(`Você está abaixo do peso ideal. <br>Seu IMC é de: <strong>${result}</strong> !!!`);

    } else if(result >= 16 && result < 16.99) {

      setMensagem(`Você está abaixo do peso ideal. <br>Seu IMC é de: <strong>${result}</strong> !!`);

    } else if(result >= 17 && result < 18.49) {

      setMensagem(`Você está abaixo do peso ideal. <br>Seu IMC é de: <strong>${result}</strong> !`);

    } else if(result >= 18.5 && result < 24.99) {

      setMensagem(`Você está no peso ideal. <br>Seu IMC é de: <strong>${result}</strong>`);

    } else if(result >= 25 && result < 29.99) {

      setMensagem(`Você está com sobrepeso. <br>Seu IMC é de: <strong>${result}</strong>`);

    } else if(result >= 30 && result < 34.99) {

      setMensagem(`Você está acima do peso ideal. <br>Seu IMC é de: <strong>${result}</strong> !`);

    } else if(result >= 35 && result < 39.99) {

      setMensagem(`Você está acima do peso ideal. <br>Seu IMC é de: <strong>${result}</strong> !!`);

    } else if(result > 40) {

      setMensagem(`Você está acima do peso ideal. <br>Seu IMC é de: <strong>${result}</strong> !!!`);

    }
  }

  return (
    <div className="app">
      <h1 className="title text-cut-out">
        Calculadora de <abbr title="Índice de Massa Corporal">IMC</abbr>
      </h1>
      <form className="box" action="/#">
        <fieldset className="wrapper-fields area-input">
          <legend className="group-title">
            Vamos calcular o seu índice de massa corporal:
          </legend>
          <label className="label" htmlFor="peso">
            Informe seu peso em quilograma (kg)
          </label>
          <input
            className="field"
            type="number"
            name="peso"
            id="peso"
            placeholder="Peso Ex.: 10, 50.4"
            value={peso}
            onChange={ (e) => atualizarCampos(e) }
            min="1"
            max="600"
            required
          />
          <label className="label" htmlFor="altura">
            Informe sua altura em centímetros (cm)
          </label>
          <input
            className="field"
            type="number"
            name="altura"
            id="altura"
            placeholder="Altura Ex.: 160, 180"
            value={altura}
            onChange={ (e) => atualizarCampos(e) }
            min="20"
            max="300"
            required
          />
        </fieldset>
        <button className="button reset-form" type="reset" onClick={limparCampos}>
          <span>
            Limpar campos
          </span>
        </button>
        <button className="button submit-form" type="submit" onClick={calcularIMC}>
          <span>
            Calcular
          </span>
        </button>
        <button className="button validate-form">
          <span>
            Validar campos
          </span>
        </button>
        <p className="message">
          {parse(mensagem)}
        </p>
        <a className="open-more-info" href="#app-root">
          <ImNotification className="icon close" />Mais informações
        </a>
      </form>
    </div>
  );
}

export default App;
