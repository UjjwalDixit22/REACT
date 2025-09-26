
import styles from './Item.module.css';
// We can name anything as parent object here in place of styles
const Item = (props) => {
  //(inside bracket where props is written we can directly pass the name of the prop{foodItem})
  return <li className={`${styles["ug-item"]}`}><span className={`${styles["ug-span"]}`}>{props.foodItem}</span></li>;
};
export default Item;
