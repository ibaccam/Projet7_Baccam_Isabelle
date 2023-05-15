import React from "react";

// Banner récupère 2 propriétés => image & title
function Banner({ image, title }) {
  return (
    <div className="banner">
      <img src={image} alt="" className="banner__img" />
      <div className="banner__filigrane"></div>
      <h1 className="banner__title">{title}</h1>
    </div>
  )
};

export default Banner;