import React, { useState } from 'react';
import './calendar.css'

const AgendamentoForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { nome, email } = formData;

    if (![nome, email ].every((value) => value.trim())) {
      alert('Todos os campos devem ser preenchidos');
    } else {
      const message = `
        Olá, tudo bem? Vim pelo site e gostaria de marcar uma consulta contigo.
        Meu nome é ${nome} e meu endereço de email: ${email}
      `;
      const url = `https://wa.me/5582999520233?text=${encodeURIComponent(message)}`;
      window.location.href = url;
    }
  };

  return (
    <div className="container">
    <form onSubmit={(e) => e.preventDefault()} method="post">
      <div className="card">
      <a class="login">Agendamento</a>
      

    
    <div className="inputBox">
        <input type="text" name="nome" required="required" value={formData.nome} onChange={handleChange} />
        <span className='user'>Digite seu nome</span>
      </div>
      <div className="inputBox">
        <input type="text" name="email" required="required" value={formData.email} onChange={handleChange} />
        <span className='user'>Digite seu E-mail</span>
        </div>
        <button type="button" className='enter' onClick={handleSubmit}>
        Agendar
      </button>
      </div>
      <div>
      </div>

      
    </form>
    </div>
  );
};

export default AgendamentoForm;