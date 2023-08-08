import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const states = [
  'Amazonas',
  'Anzoátegui',
  'Apure',
  'Aragua',
  'Barinas',
  'Bolívar',
  'Carabobo',
  'Cojedes',
  'Delta Amacuro',
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
    <div>
      <h1>Estados de Venezuela</h1>
      <input
        type="text"
        placeholder="Filtrar por nombre..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredStates.map((state) => (
          <li key={state}>
            <Link to={`/details/${state}`}>{state}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
