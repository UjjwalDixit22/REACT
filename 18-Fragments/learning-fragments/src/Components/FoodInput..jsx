import styles from "./FoodInput.module.css";
const FoodInput = () => {
    const handleOnchange=(e)=>{
        console.log(e.target.value);
    }
  return (
    <input
      type="text"
      placeholder="Enter your item here"
      className={styles.foodInput}
      onChange={handleOnchange}
    /> 
  );
};
export default FoodInput;
