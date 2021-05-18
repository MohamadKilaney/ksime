import './product.css'

//import components
import Header from '../../components/header/header';
import Navbar from '../../components/navbar/navbar';
import Card from '../../components/cards/card';
import Category from '../../components/category/category'
import Pic1 from '../../images/francesca-tosolini-Mx_W2atEaDo-unsplash.png'
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

      <Parallax bgImage={Pic1} strength={500}>
        <div className="pic-pic1">
          <span className="title">chiars</span>
        </div>
      </Parallax>
      <div className="sortType">
        Sort by    <Dropdown options={options} placeholder="popularity" className="test" />
      </div>


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
