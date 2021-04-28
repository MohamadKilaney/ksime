import './product.css'

//import components
import Header from '../../components/header/header';
import Navbar from '../../components/navbar/navbar';
import Card from '../../components/cards/card';
import Category from '../../components/category/category'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Products() {
  return (
    <div className="Products">
      <Header />
      <Navbar />
      
      <div className="container">
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
