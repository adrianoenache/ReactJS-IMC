import { ImLinkedin2, ImGithub, ImCodepen, ImCross } from "react-icons/im";
import './index.css';
import logoADR from '../../media/more-info/logo-adrianoenache-white.svg';

const logoSize = 68;

function MoreInfo() {
  return (
    <div className="more-info box">
      <p className="wrapper-logo">
        <a className="logo-link" href="https://adrianoenache.dev.br/" target="_blank" rel="noopener noreferrer">
          <img className="logo" height={ logoSize } width={ logoSize } src={ logoADR } alt="Imagem da logo marca adrianoenache.dev.br - Imagem de um aro branco contendo no centro o carácter Æ, como representação das iniciais do nome Adriano Enache. O lado direito do aro está partido contendo três fragmentos. Cada fragmento possui uma cor pura do RGB, sendo elas vermelho, verde e azul. Assim como estas cores compõem juntas todas as cores da web, aqui também representam os três pilares do desenvolvimento Front-End: HTML, CSS e Javascript." />
          <span className="hide-text">Este link leva para a página inicia do site adrianoenache.dev.br</span>
        </a>
        adrianoenache.dev.br
      </p>
      <hr />
      <ul className="social-list">
        <li>
          <a href="https://www.linkedin.com/in/adrianoenache/" target="_blank" rel="noopener noreferrer">
            <ImLinkedin2 className="icon" alt="Logo marca do LinkdIn."/>
            <span className="hide-text">Acesse o meu LinkdIn.</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/adrianoenache" target="_blank" rel="noopener noreferrer">
            <ImGithub className="icon" alt="Logo marca do GitHub."/>
            <span className="hide-text">Acesse o meu GitHub.</span>
          </a>
        </li>
        <li>
          <a href="https://codepen.io/adrianoenache" target="_blank" rel="noopener noreferrer">
            <ImCodepen className="icon"  alt="Logo marca do CodePen."/>
            <span className="hide-text">Acesse o meu CodePen.</span>
          </a>
        </li>
      </ul>
      <hr />
      <p>
        O código fonte está disponível no <a href="https://github.com/adrianoenache/ReactJS-IMC" target="_blank" rel="noopener noreferrer">meu GitHub</a>.
      </p>
      <p>
        Os <a href="https://www.pexels.com/pt-br/foto/pedras-de-monte-de-pedras-e-corpo-d-agua-a-distancia-235990/" target="_blank" rel="noopener noreferrer">créditos para a imagem</a> vão para Pixabay, usuário do Pexels minha <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer">biblioteca de imagens</a> free preferida.
      </p>
      <p>
        As informações sobre a tabela de IMC são deste <a href="https://indicedemassacorporal.com/index.html" target="_blank" rel="noopener noreferrer">site</a>.
      </p>
      <a className="close-more-info" href="#fechar">
        <ImCross className="icon" alt="Ícone de fechar na forma de duas barras cruzadas semelhante a letra X."/>
        <span className="hide-text">Ao acessar este link fecha a aba de mais informações.</span>
      </a>
    </div>
  );
}

export default MoreInfo;
