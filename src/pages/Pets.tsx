import React from 'react';
import { Cat, Dog } from 'lucide-react';

// Lista de pets para adoção
const pets = [
  {
    id: 1,
    nome: 'Luna',
    idade: 2,
    tipo: 'gato',
    foto: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=500',
    descricao: 'Luna é uma gatinha dócil e brincalhona'
  },
  {
    id: 2,
    nome: 'Max',
    idade: 3,
    tipo: 'cachorro',
    foto: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=500',
    descricao: 'Max é um cachorro energético e amigável'
  },
];

function Pets() {
  // Estado para filtrar os pets
  const [filtro, setFiltro] = React.useState('todos');

  // Função para filtrar os pets
  function filtrarPets() {
    if (filtro === 'todos') return pets;
    return pets.filter(pet => pet.tipo === filtro);
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '2rem' }}>
        Pets para Adoção
      </h1>

      {/* Botões de filtro */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <button
          onClick={() => setFiltro('todos')}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: filtro === 'todos' ? '#2563eb' : '#e5e7eb',
            color: filtro === 'todos' ? 'white' : 'black',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Todos
        </button>
        <button
          onClick={() => setFiltro('gato')}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: filtro === 'gato' ? '#2563eb' : '#e5e7eb',
            color: filtro === 'gato' ? 'white' : 'black',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          <Cat size={16} style={{ marginRight: '4px', display: 'inline' }} /> Gatos
        </button>
        <button
          onClick={() => setFiltro('cachorro')}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: filtro === 'cachorro' ? '#2563eb' : '#e5e7eb',
            color: filtro === 'cachorro' ? 'white' : 'black',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          <Dog size={16} style={{ marginRight: '4px', display: 'inline' }} /> Cachorros
        </button>
      </div>

      {/* Lista de pets */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
        {filtrarPets().map(pet => (
          <div key={pet.id} style={{ border: '1px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden' }}>
            <img
              src={pet.foto}
              alt={pet.nome}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <div style={{ padding: '1rem' }}>
              <h3 style={{ fontSize: '20px', marginBottom: '0.5rem' }}>{pet.nome}</h3>
              <p>Idade: {pet.idade} anos</p>
              <p>{pet.descricao}</p>
              <button
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  backgroundColor: '#2563eb',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  marginTop: '1rem',
                  cursor: 'pointer'
                }}
                onClick={() => alert('Entre em contato conosco para adotar!')}
              >
                Quero Adotar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pets;