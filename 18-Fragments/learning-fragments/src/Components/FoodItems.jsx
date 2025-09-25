import Item from "./Item"

const FoodItems = ({items}) => {
    // define fooditems in parent class i.e. app.jsx
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key = {item} foodItem = {item}/>
        // Key is for if we want to change single item  you are giving id to enhance performance
      ))}
    </ul>
  );
};
export default FoodItems;
