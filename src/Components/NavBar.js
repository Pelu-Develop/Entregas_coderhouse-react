import Logo from "../Imagens/logo.avif";
import CartWidget from "./CartWidget";

function Nav(props) {
  return (
    <nav className="App-nav">
      <div>
        <img src={Logo} alt="Minha logo" className="App-logo"></img>
      </div>

      <div className="App-flex">
        <ul className="App-navItens-ul">
          <li className="App-navItens-ul-li">
            <a href="#">Inicio</a>
          </li>
          <li className="App-navItens-ul-li">
            <a href="#">Catálogo</a>
          </li>
          <li className="App-navItens-ul-li">
            <a href="#">Suporte</a>
          </li>
        </ul>
      </div>
      <CartWidget quantidade={props.quantidade} />
    </nav>
  );
}

export default Nav;
