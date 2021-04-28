import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//import pages 
import Home from './pages/home/home'
import Products from './pages/products/product'
import ShowProducts from './pages/showProduct/showProduct'

function App() {
  return (
      <div className="App">
        <Home />
        {/* <Products /> */}
        {/* <ShowProducts /> */}
      </div >
  );
}

export default App;
