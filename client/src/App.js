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

import cover from './images/chairs web 2.png'
function App() {
  return (
    <Router>
      <div className="App">
        <switch>
          <Route path="/" exact component={Home} />
          <Route path="/Products/:id" component={Products} />
          <Route path="/ShowProducts" component={ShowProducts} />
        </switch>
      </div >
    </Router>
  );
}

export default App;
/*
        { <Home /> }
        <Products id="1" page_title="chairs" page_cover_image={cover} />
        { <ShowProducts /> }
*/