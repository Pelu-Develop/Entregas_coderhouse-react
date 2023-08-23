import React from "react";
import style from "./ItemCount.module.css";
import { useState } from "react";
import { createContext } from "react";

function ItemCount() {
  const [quantidade, setQuantidade] = useState(0);

  return (
    <>
      <br></br>
      <button className={style.button}>
        <a onClick={() => setQuantidade(quantidade - 1)}>-</a>
        <span>{quantidade} </span>
        <a onClick={() => setQuantidade(quantidade + 1)}>+</a>
      </button>
      <numero.Provider value={quantidade}></numero.Provider>
    </>
  );
}

export const numero = createContext();
export default ItemCount;
