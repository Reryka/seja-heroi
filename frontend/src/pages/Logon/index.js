import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handlelogin(e){
    e.preventDefault();
    try {
      const response = await api.post('login', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongNome', response.data.nome);

      history.push('/profile');
    } catch (error) {
      alert('Falha no login, tente novamente.');
    }
  }

  return (
    <div className="logon-container">
      <img src={heroesImg} alt="Heroes" />
      
      <section className='form' >
        <img src={logoImg} alt="Heroes" />

        <form onSubmit={handlelogin}>
          <h1>Faça seu Logon</h1>  

          <input 
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)} />
          <button className="button" type="submit" >Entrar</button>
          
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
          
        </form>
      </section> 

    </div>
  );
}