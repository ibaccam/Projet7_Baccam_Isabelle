import React from "react";
import { Link } from 'react-router-dom';


import Header from "../layout/Header";
import Footer from "../layout/Footer";
import bannerHome from '../assets/banner_home.jpg';
import products from '../datas/logements.json';
import Banner from '../components/Banner';
import Cards from "../components/Cards";

const slogan = "Chez vous, partout et ailleurs"

function Home() {
  return (
    <div className="home">
      <Header/>
      <div className="home__banner">
        <Banner image={bannerHome} title={slogan}/>
      </div>
      <section className="home__gallery">
        {products.map((product) => {
          return (
            <article key={product.id}>
              <Link to={`/logements/${product.id}`}>
                <Cards image={product.cover} title={product.title}/>
              </Link>
            </article>
          );
        })}
      </section>
      <Footer/>
    </div>
  )
};

export default Home;