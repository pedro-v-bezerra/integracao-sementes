// Etapa1.js
import React from 'react';

export default function Etapa1({ onChange, data }) {
  const handleInputChange = (e) => {
    onChange({ [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Etapa 1: Dados Pessoais</h2>
      <label>
        Nome Completo:
        <input type="text" name="nome" value={data.nome || ''} onChange={handleInputChange} />
      </label>
      <label>
        E-mail:
        <input type="email" name="email" value={data.email || ''} onChange={handleInputChange} />
      </label>
      <label>
        Telefone:
        <input type="tel" name="telefone" value={data.telefone || ''} onChange={handleInputChange} />
      </label>
    </div>
  );
}

