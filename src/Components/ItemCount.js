import style from "./ItemCount.module.css";
import { useState } from "react";

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
    </>
  );
}

export default ItemCount;
