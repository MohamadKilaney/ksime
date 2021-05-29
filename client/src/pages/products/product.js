import './product.css'

//import components
import Header from '../../components/header/header';
import Navbar from '../../components/navbar/navbar';
import Card from '../../components/cards/card';
import Category from '../../components/category/category'
import Pic1 from '../../images/chairs web 2.png'
import { Parallax } from 'react-parallax';


import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Products() {
  const options = [
    'lowest to highest', 'highest to lowest'
  ];
  const defaultOption = options[0];
  return (
    <div className="Products">
      <Header />

      <Parallax bgImage={Pic1} strength={20}>
        <div className="pic-pic2">
          <span className="title">chiars</span>
        </div>

        <div className="r-category">
          <a className="b-category">
              kilaney
          </a>
          <a className="b-category">
              kilaney
          </a>
          <a className="b-category">
              kilaney
          </a>
          <a className="b-category">
              kilaney
          </a>
        </div>
      </Parallax>
      {/* <div className="sortType">
        Sort by    <Dropdown options={defaultOption} placeholder="popularity" className="test" />
      </div> */}


      <div className="container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

    </div >
  );
}

export default Products;
