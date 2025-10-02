import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Components/FoodItems";
import Errormsg from "./Components/Errormsg";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput.";


function App() {
  // let foodITems =[];
  let foodITems = ["Blueberries", "Avacadoes", "Nuts", "Pineapple","Banana","Milk"];

  // if(foodITems.length===0){
  //   return <p>Still Hungry!</p>
  // }
  // let emptyMessage = foodITems.length===0?<p>Still Hungry !!!</p> : null
  let textToShow = "Food Item entered by the user." 
  const handleOnchange=(e)=>{
        console.log(e.target.value);
        textToShow = e.target.value;
    }
  return (
    <>
    <Container>
      <h1 className="foodHeading">Healthy Foods</h1>
      {/* {emptyMessage} */}
      <FoodInput handleOnchange={handleOnchange}/> 
      <p><i>{textToShow}</i></p>
      <Errormsg items={foodITems} />
      <FoodItems items={foodITems} />
    </Container>

    </>
  );
}

export default App;
