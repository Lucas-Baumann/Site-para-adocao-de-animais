import React from 'react';

function Contact() {
  // Função para enviar o formulário
  function enviarFormulario(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '2rem' }}>
        Entre em Contato
      </h1>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        {/* Informações de contato */}
        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '1rem' }}>Nosso Contato</h2>
          
          <div style={{ marginBottom: '1rem' }}>
            <h3>Telefone:</h3>
            <p>(11) 99999-9999</p>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <h3>Email:</h3>
            <p>contato@amigospeludos.com</p>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <h3>Endereço:</h3>
            <p>Rua dos Animais, 123</p>
            <p>São Paulo - SP</p>
          </div>

          <div>
            <h3>Horário:</h3>
            <p>Segunda a Sábado: 9h às 18h</p>
            <p>Domingo: 9h às 13h</p>
          </div>
        </div>

        {/* Formulário de contato */}
        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '1rem' }}>Envie uma Mensagem</h2>
          
          <form onSubmit={enviarFormulario}>
            <div style={{ marginBottom: '1rem' }}>
              <label>Nome:</label>
              <input
                type="text"
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  border: '1px solid #e5e7eb',
                  borderRadius: '4px',
                  marginTop: '0.25rem'
                }}
                required
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label>Email:</label>
              <input
                type="email"
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  border: '1px solid #e5e7eb',
                  borderRadius: '4px',
                  marginTop: '0.25rem'
                }}
                required
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label>Mensagem:</label>
              <textarea
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  border: '1px solid #e5e7eb',
                  borderRadius: '4px',
                  marginTop: '0.25rem',
                  minHeight: '100px'
                }}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '0.75rem',
                backgroundColor: '#2563eb',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;