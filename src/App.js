import {BrowserRouter as Router, Route} from "react-router-dom"; 
// import logo from './logo.svg';
import './App.css';
import LoginPage from './LoginPage'; //route 
import MainPage from './MainPage';


function App() {
  return (
    <div>
      <Router>
        <Route path="/" component={LoginPage} />
        <Route path="/main" component={MainPage} />
      </Router>
    </div>
  )
}


{/* <LoginPage exact path="/Login" component={LoginPage}/>
        <MainPage /> */}




export default App;
