import styles from "./App.module.css";
import ButtonContainer from "./Components/ButtonContainer";
import Display from "./Components/Display";
import { useState } from "react";

function App() {
  let [calVal, setcalVal] = useState("");
  const onButtonClick = (event) => {
    console.log(event.target.innerText);
    if(event.target.innerText==='C'){
      setcalVal("");
    } else if(event.target.innerText==='='){
      const result = eval(calVal);
      setcalVal(result);
    }else{
      setcalVal(calVal + event.target.innerText);
    }
  };
  return (
    <>
      <div className={styles.calculator}>
        <h1>Calculator Application!</h1>
        <Display displayVal={calVal} />
        <ButtonContainer
          onButtonClick={onButtonClick}
        />
      </div>
    </>
  );
}
export default App;
