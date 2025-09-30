import styles from "./ButtonContainer.module.css";
const ButtonContainer =() =>{
    const btns =['C','1','2','+','3','4','*','5','6','-','7','8','/','9','0','.'];

return <div className={styles.buttonsContainer}>
    {btns.map(btnNames=>
        <button className={styles.buttons}>{btnNames}</button>
    )}

        {/* <button className={styles.buttons}>C</button>
        <button className={styles.buttons}>1</button>
        <button className={styles.buttons}>2</button>
        <button className={styles.buttons}>3</button>
        <button className={styles.buttons}>4</button>
        <button className={styles.buttons}>5</button>
        <button className={styles.buttons}>6</button>
        <button className={styles.buttons}>7</button>
        <button className={styles.buttons}>8</button>
        <button className={styles.buttons}>9</button>
        <button className={styles.buttons}>0</button>
        <button className={styles.buttons}>*</button>
        <button className={styles.buttons}>#</button>
        <button className={styles.buttons}>$</button> */}

      </div>
}
export default ButtonContainer;