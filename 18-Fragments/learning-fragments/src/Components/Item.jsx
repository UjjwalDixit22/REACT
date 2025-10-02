
import styles from './Item.module.css';
// We can name anything as parent object here in place of styles

// const Item = (props) => {
const Item = ({foodItem , handleBuyButton}) => {
  // const handleBuyClick = (foodItem) => {
  //   console.log(`Item being bought is the ${foodItem}`)
  // }
  //(inside bracket where props is written we can directly pass the name of the prop{foodItem})
  return <li className={`${styles["ug-item"]} list-group-item`}><span className={`${styles["ug-span"]}`}>{foodItem}</span>
  <button className={`${styles.buttons} btn btn-info`}
  // onClick={()=>handleBuyClick(foodItem)}>
  onClick={handleBuyButton}>
    Buy</button>
  </li>;
};
export default Item;
