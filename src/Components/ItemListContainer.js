import ItemCount from "./ItemCount";
import styles from "./ItemListContainer.module.css";

function Container() {
  return (
    <ul>
      <li>
        <ItemCount className={styles.card} />
      </li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  );
}

export default Container;
