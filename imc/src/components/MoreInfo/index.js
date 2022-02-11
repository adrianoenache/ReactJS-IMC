import { ImLinkedin2, ImGithub, ImCodepen, ImCross } from "react-icons/im";
import './index.css';
import logoADR from '../../media/more-info/logo-adrianoenache-white.svg';

function MoreInfo() {
  return (
    <div className="more-info box">
      <p className="wrapper-logo">
        <a className="logo-link" href="https://adrianoenache.dev.br/" target="_blank" rel="noopener noreferrer">
          <img className="logo" src={ logoADR } alt="Imagem da logo marca adrianoenache.dev.br - Imagem de um aro branco contendo no centro o carácter Æ, como representação das iniciais do nome Adriano Enache. O lado direito do aro está partido contendo três fragmentos. Cada fragmento possui uma cor pura do RGB, sendo elas vermelho, verde e azul. Assim como estas cores compõem juntas todas as cores da web, aqui também representam os três pilares do desenvolvimento Front-End: HTML, CSS e Javascript." />
        </a>
        adrianoenache.dev.br
      </p>
      <hr />
      <ul className="social-list">
        <li>
          <a href="https://www.linkedin.com/in/adrianoenache/" target="_blank" rel="noopener noreferrer">
            <ImLinkedin2 className="icon"/>
          </a>
          LinkdIn
        </li>
        <li>
          <a href="https://github.com/adrianoenache" target="_blank" rel="noopener noreferrer">
            <ImGithub className="icon"/>
          </a>
          GitHub
        </li>
        <li>
          <a href="https://codepen.io/adrianoenache" target="_blank" rel="noopener noreferrer">
            <ImCodepen className="icon"/>
          </a>
          CodePen
        </li>
      </ul>
      <hr />
      <p>
        O código fonte está disponível no <a href="https://github.com/adrianoenache/ReactJS-IMC" target="_blank" rel="noopener noreferrer">meu GitHub</a>.
      </p>
      <p>
        Os créditos para a imagem vão para <a href="https://www.pexels.com/pt-br/foto/pedras-de-monte-de-pedras-e-corpo-d-agua-a-distancia-235990/" target="_blank" rel="noopener noreferrer">Pixabay</a>, usuário do <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer">Pexels</a> minha biblioteca de imagens free preferida.
      </p>
      <p>
        As informações sobre a tabela de IMC são deste <a href="https://indicedemassacorporal.com/index.html" target="_blank" rel="noopener noreferrer">site</a>.
      </p>
      <a className="close-more-info" href="#fechar"><ImCross className="icon"/>Fechar</a>
    </div>
  );
}

export default MoreInfo;
