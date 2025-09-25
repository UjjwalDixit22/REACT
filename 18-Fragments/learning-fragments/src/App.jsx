import "./App.css";
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let foodITems =[];
  // let foodITems = ['Blueberry', 'Avacadoes', 'Nuts', 'Pineapple'];

  // if(foodITems.length===0){
  //   return <p>Still Hungry!</p>
  // }
  // let emptyMessage = foodITems.length===0?<p>Still Hungry !!!</p> : null

  return (
    <>
      <h1>Healthy Foods</h1>
      {/* {emptyMessage} */}
      {foodITems.length === 0 && <p>Hey still there...</p>}
      <ul className="list-group">
        {foodITems.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
          // Key is for if we want to change single item  you are giving id to enhance performance

        ))} 
      </ul>
    </>
  );
}

export default App;