import React from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {


  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];


  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favorites.map((favorite, index) => (
          <Card key={index} data={favorite} />
        ))}
      </div>
      <Card/>
    </>
  );
};

export default Favs;
