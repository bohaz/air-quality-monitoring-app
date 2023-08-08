import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Card.css';

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
    <div>
      <h1>Venezuela</h1>
      <input
        style={{ padding: '10px', borderRadius: '4px', marginBottom: '10px' }}
        type="text"
        placeholder="Filter by state name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {filteredStates.map((state) => (
          <div key={state} className="card">
            <Link to={`/details/${state}`}>{state}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
