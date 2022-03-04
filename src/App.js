import {BrowserRouter , Routes, Route} from "react-router-dom"; 
// import logo from './logo.svg';
import './App.css';
import LoginPage from './LoginPage'; //route 
import MainPage from './MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}


{/* <LoginPage exact path="/Login" component={LoginPage}/>
        <MainPage /> */}




export default App;
