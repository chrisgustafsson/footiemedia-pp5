import styles from './App.module.css';
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container"

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <h1>HOME</h1>
        <h1>SIGN IN</h1>
        <h1>SIGN UP</h1>
      </Container>
    </div>
  );
}

export default App;