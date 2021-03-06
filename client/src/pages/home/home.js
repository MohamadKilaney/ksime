import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//import components
import Header from '../../components/header/header';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Category from '../../components/category/category'
import ParallaxOne from '../../components/Parallax-one/parallax-one'
import ParallaxTwo from '../../components/Parallax-two/parallax-two'
import Ads from '../../components/ads/ads'
import Info from '../../components/info/info'
import Products from '../products/product'
import cover from '../../images/chairs web 2.png'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function Home() {
  return (
    <div className="Home">
      <Header />
      <ParallaxOne />
      <Ads />
      <ParallaxTwo />
      <Category />
      <Info />
      <Footer />

      {/* <Products id="1" page_title="chairs" page_cover_image={cover}/> */}

    </div >

  );
}

export default Home;
