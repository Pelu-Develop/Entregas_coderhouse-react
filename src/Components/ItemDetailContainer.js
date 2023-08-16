import ItemDetail from "./ItemDetail";
import item from "./Item";
import { useState, useEffect } from "react";

function ItemDetailContainer() {
  const [Itens, setItens] = useState([]);

  useEffect(() => {
    const carregamento = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setItens(item);
    };
    carregamento();
  });
  return (
    <div>
      <ItemDetail item={Itens} />
    </div>
  );
}

export default ItemDetailContainer;
