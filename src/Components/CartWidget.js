import Carrinho from "../Imagens/Carrinho_de_compra.png";

function CartWidget(props) {
  return (
    <a className="App-carrinho" href="#">
      <img src={Carrinho} alt="Carrinho" className="App-img-carrinho" />
      <p className="App-carrinho-numero">{props.quantidade}</p>
    </a>
  );
}

export default CartWidget;
