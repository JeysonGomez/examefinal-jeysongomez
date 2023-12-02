import React from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Home = () => {
  const cardsData = [
    { id: 1, title: 'Tarjeta 1', content: 'Contenido de la tarjeta 1' },
    { id: 2, title: 'Tarjeta 2', content: 'Contenido de la tarjeta 2' },
    { id: 3, title: 'Tarjeta 3', content: 'Contenido de la tarjeta 3' },
    ];
    

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {cardsData.map(card => (
          <Card key={card.id} title={card.title} content={card.content} />
        ))}
      </div>
    </main>    
  )
}


export default Home