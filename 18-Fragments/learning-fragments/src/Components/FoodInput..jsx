import styles from "./FoodInput.module.css";
// const FoodInput = ({handleOnchange}) => {
const FoodInput = ({handleOnKeyDown}) => {
  return (
    <input
      type="text"
      placeholder="Enter your item here"
      className={styles.foodInput}
      // onChange={handleOnchange}
      onKeyDown={handleOnKeyDown}
    /> 
  );
};
export default FoodInput;
