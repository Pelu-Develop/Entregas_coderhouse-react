import Carrinho from "../Imagens/Carrinho_de_compra.png";
import { numero } from "./ItemCount";
import React from "react";

function CartWidget() {
  return (
    <a className="App-carrinho" href="#">
      <img src={Carrinho} alt="Carrinho" className="App-img-carrinho" />
      <numero.Consumer>
        {(numero) => {
          return <p className="App-carrinho-numero">{numero}</p>;
        }}
      </numero.Consumer>
    </a>
  );
}

export default CartWidget;
