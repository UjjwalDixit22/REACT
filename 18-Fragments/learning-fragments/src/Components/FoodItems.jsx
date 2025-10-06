import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  const onBuyButton = (event,item) => {
    let newActiveItems = [...activeItems,item];
    setActiveItems(newActiveItems);
  }
  // define fooditems in parent class i.e. app.jsx
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(event)=>(onBuyButton(event,item))}
        />
        // Key is for if we want to change single item  you are giving id to enhance performance
      ))}
    </ul>
  );
};
export default FoodItems;
