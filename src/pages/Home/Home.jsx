import React from 'react'
import "./Home.scss";
import { Categories } from '../../components/Categories/Categories';
import { FeaturedProducts } from '../../components/FeaturedProducts/FeaturedProducts';
import Slider from '../../components/Slider/Slider' 
import Contact from '../../components/Contact/Contact';


export const Home = () => {
  return (
    <div className="home">
      <Slider/>
      <FeaturedProducts type="featured"/>
      <Categories/>
      <FeaturedProducts type="trending"/>
      <Contact/>
    </div>
  )
}

export default Home


