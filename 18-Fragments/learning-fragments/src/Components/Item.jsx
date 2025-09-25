const Item = (props) => {
  //(inside bracket where props is written we can directly pass the name of the prop{foodItem})
  return <li className="list-group-item ug-item"><span className="ug-span">{props.foodItem}</span></li>;
};
export default Item;
