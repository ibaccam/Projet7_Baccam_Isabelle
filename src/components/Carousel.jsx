import React, { useState } from 'react'
import chevron_Left from "../assets/chevron_Left.png"
import chevron_Right from "../assets/chevron_Right.png"

function Carousel({pictures}) { 

    const [index, setIndex] = useState(0)  // on définit l'index de la première slide, compteur défini au départ sur 0
    const totalPicture = pictures.length // nombre d'images

  // Si on est à la dernière slide : index === totalPicture - 1
  // Alors on passe à la première : setIndex(0)
  // Sinon on passe à la prochaine : setIndex(index + 1);
const nextSlide = () => {
    if (index === totalPicture - 1) {
        setIndex(0);
    }
    else {
        setIndex(index + 1);
    }
};

  // Si on est à la première slide : index === 0
  // Alors on retourne à la dernière : setIndex(totalPicture - 1)
  // Sinon on retourne sur la précèdente : setIndex(index - 1);
const prevSlide = () => {
    if (index === 0) {
        setIndex(totalPicture - 1)
    }
    else {
        setIndex(index - 1);
    }
};

  return (
    <div className="carousel">
        <img src={pictures[index]} alt="Logement à louer" className="carousel__image" />

    {/* S'il y a plus d'une image=>  on affiche les flèches et le compteur d'images */}

    {totalPicture > 1 ? (
        <div className="carousel_scroll">
            <button onClick={prevSlide}>
                <img src={chevron_Left} alt="flèche gauche" className="carousel__left" />
            </button>

            <button onClick={nextSlide}>
                <img src={chevron_Right} alt="flèche droit" className="carousel__rigth" />
            </button>

            {/* compteur d'images */}       
            <span className="carousel__counter">
                {index + 1} / {totalPicture}
            </span>
        </div>
      ) 
    : false}
    </div>
)};

export default Carousel;