import React from "react";

const Card = ({ name, username, id }) => {
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage

    const favList = JSON.parse(localStorage.getItem("favList")) || [];

    const isAlreadyFav = favList.some((card) => card.id === id);

    if (!isAlreadyFav) {
      const newFavList = [...favList, { id, name, username }];
      // Guardar la nueva lista de favoritos en el localStorage
      localStorage.setItem("favList", JSON.stringify(newFavList));
      alert("Se agrego la Card a favoritos!");
    } else {
      alert("La Card ya esta en favoritos!");
    }
  };

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}

      <p>Name: {name}</p>
      <p>Username: {username}</p>
      <p>ID: {id}</p>

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <a href={`/details/${id}`}>Details</a>

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
