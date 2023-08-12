import ItemCount from "./ItemCount";
import styles from "./ItemList.module.css";

function itemList({ item }) {
  return (
    <>
      {item.map((produtos) => (
        <li id={produtos.id} className={styles.li}>
          <h1>{produtos.nome}</h1>
          <img src={produtos.img} />
          <h3>{produtos.descrição}</h3>
          <h2>{produtos.preço}</h2>
          <ItemCount className={styles.card} />
        </li>
      ))}
    </>
  );
}

export default itemList;
