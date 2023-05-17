import React, { useState } from 'react'
import chevron_Up from "../assets/chevron_Up.png"
import chevron_Down from "../assets/chevron_Down.png"


function Collapse({title, content}) {
    const [open, setOPen] = useState(false); // définissez notre état par défaut sur false (fermé)

    const toggle = () => {
        setOPen(!open);  // inverse la valeur actuelle
      };

        // défini les classes selon si c'est visible ou caché, idem pour le chevron
        //const collapseContent = (open? "visible" : "hidden") + " collapse"

        // permet de changer le sens du chevron quand texte visible ou caché
        const collapseChevron = (open ? chevron_Up : chevron_Down)
      
    return (
        <div className="collapse">
            <button type="button" className="collapse__button" onClick={toggle}>
                <span className="collapse__title">{title}</span>
                <div className="collapse__chevron">
                    <img src={collapseChevron} alt="" className="collapse__img" />
                </div>
            </button> 
            {open && (
                <div className="collapse__content">
                <div>{content}</div>
                </div>
            )}
        </div>
    );
}

export default Collapse
