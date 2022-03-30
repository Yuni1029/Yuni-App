import {BrowserRouter as Router, Route} from "react-router-dom"; 
// import logo from './logo.svg';
import './App.css';
import LoginPage from './LoginPage'; //route 
import MainPage from './MainPage';
import NewPage from './NewPage';


function App() {
  return (
    <div>
      <Router>
        <Route path="/" component={LoginPage} />
        <Route path="/main" component={MainPage} />
        <Route path="/new" component={NewPage} />
      </Router>
    </div>
  )
}


{/* <LoginPage exact path="/Login" component={LoginPage}/>
        <MainPage /> */}




export default App;
