import './App.css';
import {BrowserRouter as Router,Routes,Route,Switch} from "react-router-dom"
import Navbar from "./Pages/Header/Navbar"
import Home from './Pages/Home/Home';
import Details from './Pages/Movie-Detail/Details';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Footer from './Pages/Footer/Footer';

function App() {
  return (
  <div className="app">
    <Router>
    <Navbar />

      <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/movie/:imdbId" Component={Details}/>
      <Route  Component={PageNotFound}/>
      </Routes>  
          <Footer/>

    </Router>
  </div>
  );
}

export default App;
