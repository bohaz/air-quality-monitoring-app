import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Card.css';
import Amazonas from '../assets/stateImages/Amazonas.png';
import Anzoátegui from '../assets/stateImages/Anzoategui.png';
import Apure from '../assets/stateImages/Apure.jpg';
import Aragua from '../assets/stateImages/Aragua.jpg';
import Barinas from '../assets/stateImages/Barinas.jpg';
import Bolívar from '../assets/stateImages/bolivar.jpg';
import Carabobo from '../assets/stateImages/Carabobo.jpg';
import Cojedes from '../assets/stateImages/Cojedes.jpg';
import Falcón from '../assets/stateImages/Falcon.jpg';
import Guárico from '../assets/stateImages/Guarico.jpg';
import Lara from '../assets/stateImages/Lara.jpg';
import Mérida from '../assets/stateImages/Merida.jpg';
import Miranda from '../assets/stateImages/Miranda.jpg';
import Monagas from '../assets/stateImages/Monagas.jpg';
import Nueva from '../assets/stateImages/NuevaEsparta.jpg';
import Portuguesa from '../assets/stateImages/Portuguesa.jpg';
import Sucre from '../assets/stateImages/Sucre.jpg';
import Táchira from '../assets/stateImages/Tachira.jpg';
import Trujillo from '../assets/stateImages/Trujillo.jpg';
import Vargas from '../assets/stateImages/Vargas.jpg';
import Yaracuy from '../assets/stateImages/Yaracuy.jpg';
import Zulia from '../assets/stateImages/Zulia.jpg';
import Circle from '../assets/icons/circle-right-regular.svg';
import Venezuela from '../assets/icons/Venezuela.png';
import statePopulationData from '../data/populationData.json';

export const imageMap = {
  Amazonas,
  Anzoátegui,
  Apure,
  Aragua,
  Barinas,
  Bolívar,
  Carabobo,
  Cojedes,
  Falcón,
  Guárico,
  Lara,
  Mérida,
  Miranda,
  Monagas,
  Portuguesa,
  'Nueva Esparta': Nueva,
  Sucre,
  Táchira,
  Trujillo,
  Vargas,
  Yaracuy,
  Zulia,
};

const states = [
  'Amazonas',
  'Anzoátegui',
  'Apure',
  'Aragua',
  'Barinas',
  'Bolívar',
  'Carabobo',
  'Cojedes',
  'Falcón',
  'Guárico',
  'Lara',
  'Mérida',
  'Miranda',
  'Monagas',
  'Nueva Esparta',
  'Portuguesa',
  'Sucre',
  'Táchira',
  'Trujillo',
  'Vargas',
  'Yaracuy',
  'Zulia',
];

function Home() {
  const [filteredStates, setFilteredStates] = useState(states);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFilteredStates(
      states.filter((state) => state.toLowerCase().includes(searchTerm.toLowerCase())),
    );
  }, [searchTerm]);

  return (
    <div className="app-image">
      <img
        className="venezuela"
        src={Venezuela}
        alt="venezuela"
      />

      <div className="searchingsection">
        <h2>Air Quality</h2>
        <input
          className="search"
          style={{ borderRadius: '4px' }}
          type="text"
          placeholder="Filter by state name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="container-cards">
        {filteredStates.map((state) => (
          <Link to={`/details/${state}`} key={state} style={{ textDecoration: 'none' }}>
            <div
              className="card"
              style={{ backgroundImage: `url(${imageMap[state]})` }}
            >
              <img
                className="circle-right"
                src={Circle}
                alt="Circle"
              />
              <p className="card-state-name">{state}</p>
              <p className="population-data">
                Population:
                {' '}
                {statePopulationData[state]}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
