import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Components/FoodItems";
import Errormsg from "./Components/Errormsg";
import Container from "./Components/Container";


function App() {
  // let foodITems =[];
  let foodITems = ["Blueberries", "Avacadoes", "Nuts", "Pineapple"];

  // if(foodITems.length===0){
  //   return <p>Still Hungry!</p>
  // }
  // let emptyMessage = foodITems.length===0?<p>Still Hungry !!!</p> : null

  return (
    <>
    <Container>
      <h1 className="foodHeading">Healthy Foods</h1>
      {/* {emptyMessage} */}
      <Errormsg items={foodITems} />
      <FoodItems items={foodITems} />
    </Container>
    <Container>
      <p>Above mentioned Foods are good for physical and mental well being.</p> 
    </Container>
    </>
  );
}

export default App;
