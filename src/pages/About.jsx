import React from 'react'
import Header from "../layout/Header"
import Banner from "../components/Banner"
import Footer from "../layout/Footer"
import Collapse from "../components/Collapse"
import bannerAbout from "../assets/banner_about.jpg"


function About() {
    // contenu qui sera affiché dans les Collapse
  const fiabilite = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
  const respect   = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  const service   = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
  const securite  = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
  return (
    <section className='about'>
      <div className='about__bloc'>
        <Header />
        <div className="about__banner">
          <Banner image={bannerAbout} />
        </div>
        <div className='about__content'>
          <div><Collapse title="Fiabilité" content={fiabilite} /></div>
          <div><Collapse title="Respect" content={respect} /></div>
          <div><Collapse title="Service" content={service} /></div>
          <div><Collapse title="Sécurité" content={securite} /></div>
        </div>
      </div>
      <Footer />
    </section>)
}

export default About