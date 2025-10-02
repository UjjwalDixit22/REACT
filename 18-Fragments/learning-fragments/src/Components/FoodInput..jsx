import styles from "./FoodInput.module.css";
const FoodInput = ({handleOnchange}) => {
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
