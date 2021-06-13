import './product.css'
import {useParams} from "react-router-dom";
//import components
import Header from '../../components/header/header';
import Card from '../../components/cards/card';
import Pic1 from '../../images/chairs web 2.png'
import { Parallax } from 'react-parallax';

import image1 from '../../images/cross1.png'

function Products() {
  let { id } = useParams();

  return (
    <div className="Products">
      <Header />

      <Parallax bgImage={Pic1} strength={20}>
        <div className="pic-pic2">
          <span className="title">{id}</span>
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



      <div className="container">
      <Card photo={image1} title="test1 , test2" price="0" className="card"/>
      <Card photo={image1} title="test1 , test2" price="0" className="card"/>
      <Card photo={image1} title="test1 , test2" price="0" className="card"/>
      <Card photo={image1} title="test1 , test2" price="0" className="card"/>
      <Card photo={image1} title="test1 , test2" price="0" className="card"/>
      <Card photo={image1} title="test1 , test2" price="0" className="card"/>
      <Card photo={image1} title="test1 , test2" price="0" className="card"/>
      <Card photo={image1} title="test1 , test2" price="0" className="card"/>
      <Card photo={image1} title="test1 , test2" price="0" className="card"/>
      <Card photo={image1} title="test1 , test2" price="0" className="card"/>
      <Card photo={image1} title="test1 , test2" price="0" className="card"/>

      </div>

    </div >
  );
}

export default Products;
