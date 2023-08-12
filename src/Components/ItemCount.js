import { useState } from "react";

function ItemCount({ className }) {
  const [quantidade, setQuantidade] = useState(0);

  return (
    <>
      <br></br>
      <button className={className}>
        <a onClick={() => setQuantidade(quantidade - 1)}>-</a>
        <span>{quantidade} </span>
        <a onClick={() => setQuantidade(quantidade + 1)}>+</a>
      </button>
    </>
  );
}

export default ItemCount;
