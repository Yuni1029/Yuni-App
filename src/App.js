import {Router, Route} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import LoginPage from './LoginPage'; //route 
import MainPage from `./MainPage`;

function App() {
  return (
    <div>
      <Router>
        <LoginPage exact path="/Login" component={LoginPage}/>
        <MainPage />
      </Router>
    </div>
  )
}

export default App;
