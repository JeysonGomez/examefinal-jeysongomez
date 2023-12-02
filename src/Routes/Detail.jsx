import React from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = ({ match }) => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/:id${match.params.id}`
        );
        const data = await response.json();
        setDentist(data);
      } catch (error) {
        console.error("Error :", error);
      }
    };

    fetchDentist();
  }, [match.params.id]);

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}

      <div>
        <p>Nombre: {dentist.name}</p>
        <p>Email: {dentist.email}</p>
        <p>Teléfono: {dentist.phone}</p>
        <p>Sitio web: {dentist.website}</p>
      </div>

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <a href={`/details/${id}`}>Details</a>
    </>
  );
};

export default Detail;
