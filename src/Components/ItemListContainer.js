import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import styles from "./ItemList.module.css";
import item from "./Item";

function Container() {
  const [Itens, setItens] = useState([]);

  useEffect(() => {
    const carregamento = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setItens(item);
    };
    carregamento();
  });

  return (
    <ul className={styles.container}>
      <ItemList item={Itens} />
    </ul>
  );
}

export default Container;
