import React from 'react';
import { useParams } from "react-router-dom";
import products from '../datas/logements.json';

// on importe les layout
import Header from "../layout/Header"
import Footer from "../layout/Footer"

// on importe les pages
import ErrorPage from '../pages/ErrorPage';

// on importe les composants
import Collapse from '../components/Collapse';
import Carousel from '../components/Carousel';

// on importe les étoiles
import Starred from '../assets/star-red.svg';
import Stargrey from '../assets/star-grey.svg';

// Etoiles
const stars = [1, 2, 3, 4, 5]

// Fonction pour afficher la page logement
function Logement() {
  // on récupère l'id dans l'URL
  const { id } = useParams();
  // on récupère le logement lié à l'id de l'URL
  const product = products.find((product) => product.id === id);

  if (!product) {
    return <ErrorPage />;
  }
  
  // constante pour les données du produit
  const { title, location, host, rating, equipments, description, pictures } = product;

  return (
    <section className="product">
      <Header/>
      <section className="product__main">
        <Carousel pictures={pictures} />
        <div className="product__content">
        <div className="product__informations">
          {/* Afffichage du titre, de l'emplacement et des tags */}
          <h1 className="product__title">{title}</h1>
          <p className="product__location">{location}</p>
          <div className='product__tags'>
            { product.tags.map((element, index) => {
              return(<p className='tags' key={"tags-"+index}>{element}</p>)
            })}
          </div>
        </div>
      
          {/* Afffichage du propriétaire et les étoles */}
          <div className="product__host-rating">

            {/* Afffichage du propriétaire et sa photo */}
            <div className='product__host'>
              <p>{host.name}</p>
              <img src={host.picture} alt={title} />
            </div>

            {/* Afffichage des étoiles et des notes*/}
            <div className='product__rating'>
              { stars.map((star) =>   // tableau appelé stars, et pour chaque élément star dans ce tableau, le code sera exécuté //
                rating >= star ? (    // expression conditionnelle : vérifie si la variable rating >= à la valeur de l'étoile actuelle (star). //
                // Si c'est le cas, il exécute le code entre les parenthèses après le point d'interrogation (?)
                  <img                            
                    key={star.toString()}  // Cela attribue à chaque image une clé unique basée sur la valeur de l'étoile, convertie en chaîne de caractères.
                    className="product__rating--star" // Cela attribue une classe CSS à l'image 
                    src={Starred}     //Cela définit l'URL de la source de l'image pour afficher une étoile rouge
                    alt="étoile rouge"
                  />) : (             // , sinon il exécute le code entre les parenthèses après les deux-points (:).
                  <img
                    key={star.toString()}
                    className="product__rating--star"
                    src={Stargrey}
                    alt="étoile grise"
                  />
                  )
                )
              }
            </div>
          </div>
        </div>

        {/* Affichage de la description et des équipements */}
        <div className="product__collapse">
          <Collapse title="Description" content={description} />
          <Collapse title="Équipements" content={equipments}/>
        </div>
      </section>
      <Footer /> 
    </section>
  );
};

export default Logement;