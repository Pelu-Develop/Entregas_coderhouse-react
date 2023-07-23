import "./App.css";
import logo from "./logo.avif";

function App() {
  const img = logo;
  return (
    <div className="App">
      <nav className="App-nav">
        <div>
          <img src={img} alt="Minha logo" className="App-logo"></img>
        </div>

        <div className="App-navItens">
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
            <li className="App-navItens-ul-li">
              <a href="#">Carrinho</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default App;
