import React, { useState } from 'react';
import './App.css'

function FormStep1({ nextStep, formData, setFormData }) {
  const { nome, sobrenome, idade, genero } = formData;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className='container'>
      <h2>Informações Pessoais</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="nome"
            required
            placeholder='Nome'
            value={nome}
            onChange={handleInputChange}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder='Sobrenome'
            name="sobrenome"
            value={sobrenome}
            required
            onChange={handleInputChange}
          /> <br />
        </label>
        <label>

          <input
            type="number"
            name="idade"
            placeholder='Idade'
            value={idade}
            required
            onChange={handleInputChange}
          /> <br />
        </label>
        <label>

          <select name="genero" value={genero} onChange={handleInputChange}>
            <option value="">Gênero</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Outro</option>
          </select> <br />
        </label>
        <button type="submit">Próximo</button>
      </form>
    </div>
  );
}

function FormStep2({ nextStep, prevStep, formData, setFormData }) {
  const { email, telefone } = formData;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className='container'>
      <h2> Informações de Contato</h2>
      <form onSubmit={handleSubmit}>
        <label>

          <input
            placeholder='Email'
            type="email"
            name="email"
            required
            value={email}
            onChange={handleInputChange}
          /> <br />
        </label>
        <label>
          <br />
          <input
            placeholder='Telefone'
            type="text"
            name="telefone"
            required
            value={telefone}
            onChange={handleInputChange}
          /> <br />
        </label>
        <button type="button" onClick={prevStep}>Voltar</button>
        <button type="submit">Próximo</button>
      </form>
    </div>
  );
}

function FormStep3({ prevStep, formData }) {
  const { nome, sobrenome, idade, genero, email, telefone } = formData;

  return (
    <div className='container'>
      <h2> Confirmação dos Dados</h2>
      <p>Por favor, revise os dados inseridos:</p>
      <ul>
        <li>Nome: <span className="confirmacao-p"> {nome} </span> </li>
        <li>Sobrenome: <span className="confirmacao-p"> {sobrenome} </span></li>
        <li>Idade: <span className="confirmacao-p"> {idade} </span></li>
        <li>Gênero: <span className="confirmacao-p"> {genero} </span></li>
        <li>Email: <span className="confirmacao-p"> {email} </span></li>
        <li>Telefone: <span className="confirmacao-p"> {telefone} </span></li>
      </ul>
      <button type="button" onClick={prevStep}>Voltar</button>
      <button onClick={enviar}>Enviar</button>
    </div>
  );
}

function enviar() {
  alert("Dados enviados! Obrigado")
  location.href = ''
}

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    idade: '',
    genero: '',
    email: '',
    telefone: '',
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const renderFormStep = () => {
    switch (step) {
      case 1:
        return (
          <FormStep1
            nextStep={nextStep}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 2:
        return (
          <FormStep2
            nextStep={nextStep}
            prevStep={prevStep}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 3:
        return (
          <FormStep3
            prevStep={prevStep}
            formData={formData}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="app">
      {renderFormStep()}
    </div>
  );
}

export default App;


