import styles from './App.module.css';
import ButtonContainer from './Components/ButtonContainer';
import Display from './Components/Display';

function App() {

  return (
    <>
     <div className={styles.calculator}>
      <h1>Calculator Application!</h1>
      <Display/>
      <ButtonContainer/>
     </div>
    </>
  )
}

export default App
