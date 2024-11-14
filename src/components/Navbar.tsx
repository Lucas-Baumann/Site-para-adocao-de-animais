import React from 'react';
import { Link } from 'react-router-dom';
import { PawPrint } from 'lucide-react';

// Componente da barra de navegação
function Navbar() {
  return (
    <div style={{ backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', padding: '1rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <PawPrint size={32} color="#2563eb" />
          <span style={{ marginLeft: '8px', fontSize: '20px', fontWeight: 'bold', color: '#1f2937' }}>
            Amigos Peludos
          </span>
        </Link>

        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link to="/" style={{ color: '#4b5563', textDecoration: 'none' }}>Home</Link>
          <Link to="/pets" style={{ color: '#4b5563', textDecoration: 'none' }}>Adoção</Link>
          <Link to="/contact" style={{ color: '#4b5563', textDecoration: 'none' }}>Contato</Link>
          <Link to="/donate" style={{ color: '#4b5563', textDecoration: 'none' }}>Doar</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;