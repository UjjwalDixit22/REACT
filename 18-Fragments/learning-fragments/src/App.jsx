import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Components/FoodItems";
import Errormsg from "./Components/Errormsg";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput.";
import { useState } from "react";

function App() {
  // let foodITems =[];
  // let foodITems = ["Blueberries", "Avacadoes", "Nuts", "Pineapple","Banana","Milk"];

  // if(foodITems.length===0){
  //   return <p>Still Hungry!</p>
  // }
  // let emptyMessage = foodITems.length===0?<p>Still Hungry !!!</p> : null
  // let textStateArr =  useState("Food Item entered by the user.");
  // let textToShow = textStateArr[0]; // Current Value
  // let setTextStateFun = textStateArr[1]; // Changing Function

  // Do this

  // let [textToShow, setTextStateFun] = useState();

  let [foodItems,setFoodItems] = useState([
    "Blueberries",
    "Avacadoes",
    "Nuts",
  ]);

  // console.log(`Current value of textState:${textToShow}`);

  // It returns array of current vale and changing function

  // let textToShow = "Food Item entered by the user."
  // const handleOnchange = (e) => {
  const onKeyDown = (e) => {
    if(event.key === "Enter"){
      let newFoodItem = e.target.value;
      let newFoodItems = [...foodItems,newFoodItem]; // Copying the old array
      setFoodItems(newFoodItems);
      console.log(newFoodItem);
      
    }
    // console.log(e.target.value);
    // setTextStateFun(e.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="foodHeading">Healthy Foods</h1>
        {/* {emptyMessage} */}
        {/* <FoodInput handleOnchange={handleOnchange} />
         */}
        <Errormsg items={foodItems} />
        <FoodInput handleOnKeyDown={onKeyDown} />
        {/* <p><i>{textToShow}</i></p> */}
        <FoodItems items={foodItems} />
      </Container>
    </>
  );
}

export default App;
