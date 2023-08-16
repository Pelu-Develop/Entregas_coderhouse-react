import ItemCount from "./ItemCount";
import style from "./ItemDetail.module.css";

function ItemDetail(props) {
  return (
    <>
      {props.item.map((detail) => (
        <div id={detail.id} className={style.detail}>
          <img src={detail.img} />
          <div>
            <h1>{detail.nome}</h1>
            <h3>{detail.avaliação}</h3>
            <h2>{detail.marketing}</h2>
            <p>{detail.descrição}</p>
            <h2>{detail.preço}</h2>
            <h2>{detail.parcelamento}</h2>
            <ItemCount />
          </div>
        </div>
      ))}
    </>
  );
}

export default ItemDetail;
